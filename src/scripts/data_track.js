function goHome() {
	window.location = "index.html"; // Redirecting to other page.
}

const datama = `[ 
  {
    "id": 11,
    "nama": "Budi Santosa",
    "jenis_kelamin": "Pria",
    "umur": 24,
    "status": "Negatif"
  },
  {
    "id": 12,
    "nama": "Aalia Hodgson",
    "jenis_kelamin": "Wanita",
    "umur": 22,
    "status": "Negatif"
  },
  {
    "id": 13,
    "nama": "Emrys Pruitt",
    "jenis_kelamin": "Pria",
    "umur": 35,
    "status": "Positif"
  },
  {
    "id": 14,
    "nama": "Archibald Osborne",
    "jenis_kelamin": "Pria",
    "umur": 24,
    "status": "Positif"
  },
  {
    "id": 15,
    "nama": "Amie Dawe",
    "jenis_kelamin": "Wanita",
    "umur": 25,
    "status": "Positif"
  },
  {
    "id": 16,
    "nama": "Faisal Guzman",
    "jenis_kelamin": "Pria",
    "umur": 26,
    "status": "Positif"
  },
  {
    "id": 17,
    "nama": "Katarina Tierney",
    "jenis_kelamin": "Wanita",
    "umur": 24,
    "status": "Negatif"
  },
  {
    "id": 18,
    "nama": "Brenda Sweet",
    "jenis_kelamin": "Wanita",
    "umur": 26,
    "status": "Negatif"
  },
  {
    "id": 19,
    "nama": "Tudor Squires",
    "jenis_kelamin": "Pria",
    "umur": 38,
    "status": "Negatif"
  },
  {
    "id": 20,
    "nama": "Perry Silva",
    "jenis_kelamin": "Pria",
    "umur": 23,
    "status": "Negatif"
  }
]`

const data = JSON.parse(datama);

function cetak() {
	var ame = "";
	
	data.forEach(muhFunc);
	
	function muhFunc(value, index, array) {
	  ame += "<tr><th>";
	  ame += (index + 1);
	  ame += "</th><th>";
	  ame += value.id;
	  ame += "</th><th>";
	  ame += value.nama;
	  ame += "</th><th>";
	  ame += value.jenis_kelamin;
	  ame += "</th><th>";
	  ame += value.umur;
	  ame += "</th><th>";
	  ame += value.status;
	  ame += "</th></th>";
	}
	
	document.getElementById("badanTabel").innerHTML = ame;
}

function ambilDariData() {
	var input, ame;
	input = document.getElementById('search').value;
	
	console.log(input);
	
	ame = "";
	
	var inde = 0;
	
	for (i = 0; i < data.length; i++) {
		var strs = String(data[i].id);
		if (strs.toUpperCase().indexOf(input) > -1) {
			ame += "<tr><th>";
			ame += (++inde);
			ame += "</th><th>";
			ame += data[i].id;
			ame += "</th><th>";
			ame += data[i].nama;
			ame += "</th><th>";
			ame += data[i].jenis_kelamin;
			ame += "</th><th>";
			ame += data[i].umur;
			ame += "</th><th>";
			ame += data[i].status;
			ame += "</th></th>";
		}
	}
	document.getElementById("badanTabel").innerHTML = ame;
}