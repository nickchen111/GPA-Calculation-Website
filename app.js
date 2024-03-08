let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

//將script拿出來用
const time_line = new TimelineMax();

// parameter1 是要控制的對象 2 : 是duration  3 : 是我們控制對象的原始狀態給object 4 : 控制對象動畫結束後的狀態
// ease那個是script裡面可以用的東西
// parameter 5
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2" // 讓他跟變寬的時候一起跑
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

// setTimeout 跟之前學的window.setInterval類似 但他是在某個時間之後執行函式
// pointerEvents顧名思義，這是一個針對滑鼠事件的屬性，預設值為 auto，若值為 none，則可以穿越該元素，點擊到下方的元素。
setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);

// 讓enter key沒辦法用 FORM裡面的button 會對enter有反應不然button是垃圾桶的 會對enter有反應 把東西交出去
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//防止 form內部的button交出表單
let allButtons = document.querySelectorAll("button"); // nodeList
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//選擇select內的options(A B C+ 啥的)之後要改變相對應的顏色
let allSelect = document.querySelectorAll("select");
allSelect.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA(); // 換了select A B C GPA也會換
    // change為查到的option 選擇後發生的事件
    changeColor(e.target); // e.target就是 <select>
  });
});

//改變credit的數字 gpa也要更新
let credits = document.querySelectorAll(".class-credit");
//改了任何一個credit的值 在上面監視了evet change 改任何一個都會呼叫 setGPA()
credits.forEach((credit) => {
  credit.addEventListener("change", () => {
    setGPA();
  });
});

function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B+" ||
    target.value == "B-" ||
    target.value == "B"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C+" ||
    target.value == "C-" ||
    target.value == "C"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D+" ||
    target.value == "D-" ||
    target.value == "D"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("select");
  let sum = 0; // 分子用
  let creditSum = 0; // 分母用
  //公式為 學分*A B C.. + ...
  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      console.log(credits[i].valueAsNumber);
      creditSum += credits[i].valueAsNumber;
    }
  }

  for (let i = 0; i < formLength; i++) {
    if (selects[i].value == "A") {
      sum +=
        4.0 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "A-") {
      sum +=
        3.7 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "B+") {
      sum +=
        3.4 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "B") {
      sum +=
        3.0 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "B-") {
      sum +=
        2.7 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "C+") {
      sum +=
        2.3 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "C") {
      sum +=
        2.0 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "C-") {
      sum +=
        1.7 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "D+") {
      sum +=
        1.3 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "D") {
      sum +=
        1.0 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "D-") {
      sum +=
        0.7 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else if (selects[i].value == "F") {
      sum +=
        0.0 *
        (isNaN(credits[i].valueAsNumber) == true
          ? 0
          : credits[i].valueAsNumber);
    } else {
      sum += 0.0;
    }
  }

  let result;
  if (creditSum == 0) result = (0.0).toFixed(2);
  else result = (sum / creditSum).toFixed(2); // 到小數點第二位就好

  document.getElementById("result-gpa").innerText = result;
}

// 新增form按鍵
let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");

  //製作五個小元素 4 input 以及1 button
  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("list", "opt");
  newInput1.classList.add("class-type");
  newInput1.setAttribute("placeholder", "class catogory");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.classList.add("class-number");
  newInput2.setAttribute("placeholder", "class number");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.setAttribute("placeholder", "credits");
  newInput3.classList.add("class-credit");
  newInput3.addEventListener("change", () => {
    setGPA();
  });

  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  // select tag
  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);
  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  // 做垃圾桶
  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fas");
  newItag.classList.add("fa-trash");
  newButton.appendChild(newItag);
  newButton.addEventListener("click", (e) => {
    e.preventDefault(); //防止傳表單過去後端
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newForm.appendChild(newDiv);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);

  document.querySelector(".all-inputs").appendChild(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

// 刪除時的功能 需要有動畫變小
let allTrash = document.querySelectorAll(".trash-button");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
});

// 第一招可以做刪除動畫以及更改gpa的寫法
allTrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});

// merge sort
let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");
btn1.addEventListener("click", () => {
  handleSorting("descending");
});
btn2.addEventListener("click", () => {
  handleSorting("ascending");
});

function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  let objectArray = []; //之後用來組成物件的陣列

  for (let i = 0; i < graders.length; i++) {
    let class_name = graders[i].children[0].value; // class catagory
    let class_number = graders[i].children[1].value; // class number
    let class_credit = graders[i].children[2].value;
    let class_grade = graders[i].children[3].value;

    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };
      objectArray.push(class_object);
    }
  }

  //取得object之後我們可以將成績轉成數字
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
  }

  let n = objectArray.length;

  objectArray = mergeSort(objectArray, 0, n - 1);

  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }

  //根據object array的內容更新網頁
  let allInput = document.querySelector(".all-inputs");

  allInput.innerHTML = ""; //清空裡面的值

  for (let i = 0; i < objectArray.length; i++) {
    allInput.innerHTML += `<form>
    <div class="grader">
        <input
        type="text"
        placeholder="class catogory"
        class="class-type"
        list="opt"
        value = ${objectArray[i].class_name}
        /><!-- 
        --><input
        type="text"
        placeholder="class number"
        class="class-number"
        value = ${objectArray[i].class_number}
        /><!-- 
        --><input
        type="number"
        placeholder="credits"
        min="0"
        max="6"
        class="class-credit"
        value = ${objectArray[i].class_credit}
        /><!-- 
        --><select name="select" class="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
        ><!-- 
        --><button class="trash-button">
        <i class="fas fa-trash"></i>
        </button>
    </div>
    </form>`;
  }
  // select 可直接用js 改 無法用value改
  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].class_grade;
  }
  //select 事件監聽 -> color change
  let allSelect = document.querySelectorAll("select");
  allSelect.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  //credit 事件監聽
  let allCredit = document.querySelectorAll(".class-credit");
  allCredit.forEach((credit) => {
    credit.addEventListener("change", () => {
      setGPA();
    });
  });
  //垃圾桶
  let allTrash = document.querySelectorAll(".trash-button");
  allTrash.forEach((trash) => {
    let form = trash.parentElement.parentElement;
    form.addEventListener("transitionend", (e) => {
      e.target.remove();
      setGPA();
    });
  });

  allTrash.addEventListener("transitionend", (e) => {
    let form = e.target.parentElement.parentElement;
  });
}

function mergeSort(arr, a, b) {
  if (a > b) return [];
  if (a == b) return [arr[a]];

  let mid = Math.floor(a + (b - a) / 2);
  let left = mergeSort(arr, a, mid);
  let right = mergeSort(arr, mid + 1, b);

  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i].class_grade_number > right[j].class_grade_number) {
      res.push(right[j]);
      j++;
    } else {
      res.push(left[i]);
      i++;
    }
  }

  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }

  return res;
}
