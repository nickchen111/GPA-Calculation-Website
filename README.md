# GPA-Calculation-Website

# 專案說明
* 網站功能: 可在下拉式選單中輸入上的課程、學分數、成績以及自行填入課號 default設定是三個項目，可自行新增或者刪除項目，最後會自動計算GPA成績 並且提供降序升序排序成績的功能
* 網站畫面:
  * 過場動畫:
    * <img height="400" width="800" src="https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E9%81%8E%E5%A0%B4%E5%8B%95%E7%95%AB.png">
  * 網站畫面:
    * <img height="400" width="800" src="https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E7%B6%B2%E7%AB%99%E7%95%AB%E9%9D%A2.png">
  * 下拉式選單選擇課程
    * <img height="400" width="1000" src="https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E4%B8%8B%E6%8B%89%E5%BC%8F%E9%81%B8%E5%96%AE%E9%81%B8%E6%93%87%E8%AA%B2%E7%A8%8B.png">
  * 下拉式選單選擇成績
    * <img height="400" width="800" src="https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E4%B8%8B%E6%8B%89%E5%BC%8F%E9%81%B8%E5%96%AE%E9%81%B8%E6%93%87%E6%88%90%E7%B8%BE%E5%AD%B8%E5%88%86%E6%95%B8.png">
  * 自動計算GPA
    * <img height="400" width="800" src="https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E8%87%AA%E5%8B%95%E8%A8%88%E7%AE%97GPA.png">
    也可以在github page使用該網頁 但建議使用firefox瀏覽器開啟
* 技術細節:
  * 排序演算法使用merge sort 來優化時間複雜度
  * 表單內的按鍵都使用preventDefault()防止表單傳出造成更新頁面的效果
  * 選擇成績時選項格會自動變色已符合對應的成績
  * 製作網站開場動畫提升特色
  * 不論更改學分或者成績GPA都會相對應修改 並且增刪項目時也會有transform動畫 以提升使用者體驗

# English Version
- **Website Functionality:** The website allows users to input courses, credits, grades, and manually enter course numbers in a dropdown menu. The default setting includes three items, which users can add or delete. The GPA score is automatically calculated, and the website provides functionality for sorting scores in descending or ascending order.
* Website Screens:
  * Transition Animation:
    ![Transition Animation](https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E9%81%8E%E5%A0%B4%E5%8B%95%E7%95%AB.png)
  * Website Interface:
    ![Website Interface](https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E7%B6%B2%E7%AB%99%E7%95%AB%E9%9D%A2.png)
  * Dropdown Menu for Selecting Courses:
    ![Dropdown Menu for Selecting Courses](https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E4%B8%8B%E6%8B%89%E5%BC%8F%E9%81%B8%E5%96%AE%E9%81%B8%E6%93%87%E8%AA%B2%E7%A8%8B.png)
  * Dropdown Menu for Selecting Grades:
    ![Dropdown Menu for Selecting Grades](https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E4%B8%8B%E6%8B%89%E5%BC%8F%E9%81%B8%E5%96%AE%E9%81%B8%E6%93%87%E6%88%90%E7%B8%BE%E5%AD%B8%E5%88%86%E6%95%B8.png)
  * Automatic GPA Calculation:
    ![Automatic GPA Calculation](https://github.com/nickchen111/GPA-Calculation-Website/blob/main/img/%E8%87%AA%E5%8B%95%E8%A8%88%E7%AE%97GPA.png)
  You can also use the webpage on GitHub Pages, but it is recommended to open it using the Firefox browser.
- **Technical Details:**
  - The sorting algorithm uses merge sort to optimize time complexity.
  - All buttons in the form use preventDefault() to prevent the form from submitting and causing a page refresh.
  - When selecting grades, the option box will automatically change color to match the corresponding grade.
  - Created an opening animation for the website to enhance its uniqueness.
  - Any changes in credits or grades will be reflected in the GPA calculation, and there are transform animations when adding or deleting items to improve user experience.
