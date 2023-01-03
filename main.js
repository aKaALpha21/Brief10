let xhr = new XMLHttpRequest();
xhr.open('GET' , 'movies.json');
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var movies = JSON.parse(xhr.responseText);
        afficher(movies)

        //sort 
        document.getElementById('select').onchange=function(){
            var value=document.getElementById('select').value
            if(value=="1"){
                movies.sort((x, z) => x.Titre.localeCompare(z.Titre))
                afficher(movies)
            }
            if(value=="2"){
                movies.sort((x, z) => z.Titre.localeCompare(x.Titre))
                afficher(movies)
            }
            if(value=="3"){
                movies.sort((x, z) => x.Réalisateur.localeCompare(z.Réalisateur))
                afficher(movies)
            }
            if(value=="4"){
                movies.sort((x, z) => z.Réalisateur.localeCompare(x.Réalisateur))
                afficher(movies)
            }
            if(value=="5"){
                movies.sort(( x , z ) => x.Durée - z.Durée)
                afficher(movies)
            }
            if(value=="6"){
           movies.sort(( x , z ) => z.Durée - x.Durée)
           afficher(movies)
        }
            if(value=="7"){
            movies.sort(( x , z ) => x.Lannéedeproduction - z.Lannéedeproduction)
            afficher(movies)
         }
            if(value=="8"){
            movies.sort(( x , z ) => z.Lannéedeproduction - x.Lannéedeproduction)
            afficher(movies)
         }
        }


        // search 
        document.getElementById('search').onkeyup = function(){
           
            var search= document.getElementById("search").value;
            if(search==''){
                afficher(movies);
            }
            var newDataList = movies.filter(function(a){
              return a.Titre.toLowerCase().includes(search.toLowerCase());
            });
            afficher(newDataList);
        }              
    }
    }



    //afficher table
    function afficher(movies){
        var table = '';
        for (let i = 0; i < movies.length; i++) {
            table += `
            <tr>
                <td>${movies[i].empty}</td>
                <td><img src="${movies[i].Poster}" </td>
                <td>${movies[i].Titre}</td>
                <td>${movies[i].Durée}</td>
                <td>${movies[i].Lannéedeproduction}</td>
                <td>
                <ul>${movies[i].Festivals.map(Festivals => `<li>${Festivals}</li>`).join('')}</ul>
                </td>
                <td>
                <ul>${movies[i].Acteurs.map(Acteurs => `<li>${Acteurs.nom}, ${Acteurs.prénom}, ${Acteurs.nationalité}</li>`).join('')}</ul>
                </td>
                <td>${movies[i].Réalisateur}</td>
            <tr>
            `;
        }
        
        document.getElementById('tbody').innerHTML= table;
    }

xhr.send()
