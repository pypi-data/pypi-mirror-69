from PyQt5.QtWidgets import *

from parsel import Selector
import requests

from .utils_ui.text_viewer import TextViewer
from .browser_window.browser import QtBrowser
from .utils_ui.tools_tab_ui import Queries
import sys


class Main(QMainWindow):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.init_ui()

    def init_ui(self):
        self.setWindowTitle('Scrapy GUI - Browser')
        tabs = QTabWidget()
        self.browser = QtBrowser(main=self)
        self.queries = Queries(main=self)
        self.source_viewer = TextViewer()
        self.notes = QPlainTextEdit()
        tabs.addTab(self.browser, 'Browser')
        tabs.addTab(self.queries, 'Tools')
        tabs.addTab(self.source_viewer, 'Source')
        tabs.addTab(self.notes, 'Notes')
        self.setCentralWidget(tabs)
        self.show()

    def update_source(self, url):
        # pyqt5 webengine has the final html including manipulation from javascript, etc
        # for scraping with scrapy the first one matters, so will get again
        response = requests.get(url)
        html = response.text
        selector = Selector(text=html)
        self.queries.update_source(selector)
        self.source_viewer.setPrettyHtml(html)


def open_browser():
    app = QApplication(sys.argv)
    main = Main()
    app.exec_()
