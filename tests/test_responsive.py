from selenium import webdriver
import time

driver = webdriver.Chrome()

# Móvil
driver.set_window_size(375, 812)
driver.get("https://vincitorecode.github.io/web-portfolio/")
time.sleep(2)
driver.save_screenshot("mobile_view.png")

# Escritorio
driver.set_window_size(1280, 800)
driver.get("https://vincitorecode.github.io/web-portfolio/")
time.sleep(2)
driver.save_screenshot("desktop_view.png")

driver.quit()
# This script opens the portfolio in both mobile and desktop views,
# waits for it to load, and takes screenshots of each view.