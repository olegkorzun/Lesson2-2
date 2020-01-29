class Courses {
    constructor (page,data) {
        this.page = page;
        this.data = data;
        this.show();
    }
    show () {
        let corseData = JSON.parse(this.data);
        let main = document.getElementById('main');
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.innerHTML = this.page;
        let tbody = document.getElementById('tbody');
        for (let i=0; i<corseData.length; i++) {
            tbody.innerHTML += '<tr scope="row"> <td>' + 
                corseData[i].code + '</td> <td>' +
                corseData[i].student + '</td> <td>' +
                corseData[i].examMark + '</td> <td>' +
                corseData[i].projectMark + '</td> <td>' +
                corseData[i].courseName + '</td> </tr>';
        }
    }
}