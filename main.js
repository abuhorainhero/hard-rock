document.getElementById('search').addEventListener("click", function(){
    const songName = document.getElementById("song-name").value;
    fetch('https://api.lyrics.ovh/suggest/'+songName)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        document.getElementById("title_0").innerText = data.data[0].title;
        document.getElementById("name_0").innerText = data.data[0].artist.name;

        document.getElementById("title_1").innerText = data.data[1].title;
        document.getElementById("name_1").innerText = data.data[1].artist.name;

        document.getElementById("title_2").innerText = data.data[2].title;
        document.getElementById("name_2").innerText = data.data[2].artist.name;

        document.getElementById("title_3").innerText = data.data[3].title;
        document.getElementById("name_3").innerText = data.data[3].artist.name;

        document.getElementById("title_4").innerText = data.data[4].title;
        document.getElementById("name_4").innerText = data.data[4].artist.name;

        document.getElementById("title_5").innerText = data.data[5].title;
        document.getElementById("name_5").innerText = data.data[5].artist.name;

        document.getElementById("title_6").innerText = data.data[6].title;
        document.getElementById("name_6").innerText = data.data[6].artist.name;
        
        document.getElementById("title_7").innerText = data.data[7].title;
        document.getElementById("name_7").innerText = data.data[7].artist.name;

        document.getElementById("title_8").innerText = data.data[8].title;
        document.getElementById("name_8").innerText = data.data[8].artist.name;

        document.getElementById("title_9").innerText = data.data[9].title;
        document.getElementById("name_9").innerText = data.data[9].artist.name;
    })
    .catch(error => console.log(error));

})





