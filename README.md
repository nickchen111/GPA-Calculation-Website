# GPA-Calculation-Website

#專案說明
* 網站功能 : 可在下拉式選單中輸入上的課程、學分數、成績以及自行填入課號 default設定是三個項目，可自行新增或者刪除項目，最後會自動計算GPA成績 並且提供降序升序排序成績的功能
* 技術細節:
  * 排序演算法使用merge sort 來優化時間複雜度
  * 表單內的按鍵都使用preventDefault()防止表單傳出造成更新頁面的效果
  * 選擇成績時選項格會自動變色已符合對應的成績
  * 製作網站開場動畫提升特色
  * 不論更改學分或者成績GPA都會相對應修改 並且增刪項目時也會有transform動畫 以提升使用者體驗

# English Version
-* Website Functionality:** The website allows users to input courses, credits, grades, and manually enter course numbers in a dropdown menu. The default setting includes three items, which users can add or delete. The GPA score is automatically calculated, and the website provides functionality for sorting scores in descending or ascending order.
- **Technical Details:**
  - The sorting algorithm uses merge sort to optimize time complexity.
  - All buttons in the form use preventDefault() to prevent the form from submitting and causing a page refresh.
  - When selecting grades, the option box will automatically change color to match the corresponding grade.
  - Created an opening animation for the website to enhance its uniqueness.
  - Any changes in credits or grades will be reflected in the GPA calculation, and there are transform animations when adding or deleting items to improve user experience.
