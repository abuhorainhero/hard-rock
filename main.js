document.getElementById('search').addEventListener("click", function(){
    const songName = document.getElementById("song-name").value;
    fetch('https://api.lyrics.ovh/suggest/'+songName)
    .then(response => response.json())
    .then(data => {
        titleNameGet("title_0", "name_0", "get_0", 0);
        titleNameGet("title_1", "name_1", "get_1", 1);
        titleNameGet("title_2", "name_2", "get_2", 2);
        titleNameGet("title_3", "name_3", "get_3", 3);
        titleNameGet("title_4", "name_4", "get_4", 4);
        titleNameGet("title_5", "name_5", "get_5", 5);
        titleNameGet("title_6", "name_6", "get_6", 6);
        titleNameGet("title_7", "name_7", "get_7", 7);
        titleNameGet("title_8", "name_8", "get_8", 8);
        titleNameGet("title_9", "name_9", "get_9", 9);

        function titleNameGet(title_no, name_no, get_no, No){
            document.getElementById(title_no).innerText = data.data[No].title + ", " + data.data[No].album.title;
            document.getElementById(name_no).innerText = data.data[No].artist.name;
            document.getElementById(get_no).addEventListener("click", function(){
                document.getElementById("titleSong").innerText = data.data[No].title;
                fetch("https://api.lyrics.ovh/v1/"+data.data[No].artist.name+"/"+data.data[No].title)
                .then(res => res.json())
                .then(data => {
                    document.getElementById("lyricsText").innerText = data.lyrics;
                })
            })
        }
        
    })
    .catch(error => console.log(error));

})







        // // document.getElementById("title_0").innerText = data.data[0].title;
        // // document.getElementById("name_0").innerText = data.data[0].artist.name;
        // // document.getElementById("get_0").addEventListener("click", function(){
        // //     document.getElementById("titleSong").innerText = data.data[0].title;
        // //     fetch("https://api.lyrics.ovh/v1/"+data.data[0].artist.name+"/"+data.data[0].title)
        // //     .then(res => res.json())
        // //     .then(data => {
        // //         console.log(data)
        // //         document.getElementById("lyricsText").innerText = data.lyrics;
        // //     })
        // // })

        // document.getElementById("title_1").innerText = data.data[1].title;
        // document.getElementById("name_1").innerText = data.data[1].artist.name;
        // document.getElementById("get_1").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[1].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_2").innerText = data.data[2].title;
        // document.getElementById("name_2").innerText = data.data[2].artist.name;
        // document.getElementById("get_2").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[2].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_3").innerText = data.data[3].title;
        // document.getElementById("name_3").innerText = data.data[3].artist.name;
        // document.getElementById("get_3").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[3].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_4").innerText = data.data[4].title;
        // document.getElementById("name_4").innerText = data.data[4].artist.name;
        // document.getElementById("get_4").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[4].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_5").innerText = data.data[5].title;
        // document.getElementById("name_5").innerText = data.data[5].artist.name;
        // document.getElementById("get_5").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[5].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_6").innerText = data.data[6].title;
        // document.getElementById("name_6").innerText = data.data[6].artist.name;
        // document.getElementById("get_6").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[6].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })
        
        // document.getElementById("title_7").innerText = data.data[7].title;
        // document.getElementById("name_7").innerText = data.data[7].artist.name;
        // document.getElementById("get_7").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[7].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_8").innerText = data.data[8].title;
        // document.getElementById("name_8").innerText = data.data[8].artist.name;
        // document.getElementById("get_8").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[8].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })

        // document.getElementById("title_9").innerText = data.data[9].title;
        // document.getElementById("name_9").innerText = data.data[9].artist.name;
        // document.getElementById("get_9").addEventListener("click", function(){
        //     document.getElementById("titleSong").innerText = data.data[9].title;
        //     document.getElementById("lyricsText").innerText = lyrics;
        // })