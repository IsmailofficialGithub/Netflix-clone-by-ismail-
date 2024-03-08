
let qna = document.querySelectorAll(".qna");
let details = document.querySelectorAll(".detail");

let qnaArray = Array.from(qna);
let detailArray = Array.from(details);

qnaArray.forEach((qna, index) => {
    qna.addEventListener("click", () => {

        detailArray.forEach((detail, i) => {
            // if (i !== index) {
            //     detail.classList.remove("show");
            // }
        });
        

        detailArray[index].classList.toggle("show");
    });
});










