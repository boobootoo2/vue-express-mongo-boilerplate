const routeIds = ["/index.htm", "/Winter%20Hiking%202015", "/Snowshoeing%20and%20X%20C%20Skiing%202015", "/Skiing%20at%20Belleayre%202015", "/Snow%202015", "/Delaware%20River%20Fishing%20Fall%202014", "/Fall%20Biking%202014", "/Birthday%202014", "/Fall%20Hiking%202014", "/Salmon%20River%202014", "/Soque%202014", "/Chesapeake%20Fishing%202014", "/Winter%20Fun%202014", "/Spring%20Fun%202014", "/Andros%202014", "/Baja%202014", "/Sheila's%2050th%20Reunion", "/Delaware%20River%20Fishing%202014", "/Brodheads%202014", "/Trout%20Parade%202014", "/Newfoundland%202014", "/India%20Port%20Blair", "/India%20First%20Andamans%20Week%201", "/India%20First%20Andamans%20Week%202", "/India%20Delhi", "/India%20North%20Week%201%20Palengaad%20and%20Nachiketatal", "/India%20North%20Week%201%20Dodital%20and%20Darwa%20Pass", "/India%20North%20Week%202", "/India%20Andamans%20Return%20Week%201", "/India%20Andamans%20Return%20Week%202", "/India%20Andamans%20Return%20Week%203", "/India%20Andamans%20Return%20Week%204", "/India%20Andamans%20Return%20Week%205", "/North%20to%20Alaska%202013", "/Jasper%202013", "/Bow%20River%202013", "/Alaska%20at%20Kanektok%202013", "/Alaska%20at%20Kenai%202013", "/Alaska%20Highway%20South", "/Olympic%20Peninsula", "/Snake%20River%202013", "/Kootenai%202013", "/Madison%202013", "/Yellowstone%20Park%202013", "/Bighorn%202013", "/Clark%20Fork%202013", "/Secret%20Place%20Number%204%202013", "/Missouri%202013", "/Secret%20Place%20Number%205", "/Secret%20Place%20Number%206", "/Secret%20Place%20Number%207", "/Blackfoot%20Canyon%202013", "/Rock%20Creek%202013", "/Holter%20Dam%202013", "/Lower%20Madison%202013", "/Big%20Hole%202013", "/Beaverhead%202013", "/Nelson's%20Creek%202013", "/Wind%20River%20Canyon%202013", "/Algonquin%202013", "/Chesapeake%202013", "/Fishing%20June%202013", "/Savannah%202013", "/Florida%20Keys%202013", "/Sanibel%202013", "/Soque%202013", "/Costa%20Rica%202013%20Luna%20Lodge%20Week%20One", "/Costa%20Rica%202013%20Luna%20Lodge%20Week%20Two", "/Costa%20Rica%202013%20Week%20Three%20Beaching", "/Costa%20Rica%202013%20Week%20Three%20Plus%20Fly%20Fishing", "/France%202013", "/Tennessee%202012", "/Soque%20October%202012", "/Sheila%20Birthday%202012", "/Salmon%20River%202012", "/Delaware%202012", "/Flowers%202012", "/Pere%20Marquette", "/Deckers%202012", "/Snake%20Idaho%202012", "/Upper%20Ruby%202012", "/Gerogetown%20Lake%20et%20al", "/Beaverhead%202012", "/Yellowstone%20Lower%202012", "/Secret%20Place%201%202012", "/Big%20Horn%202012", "/Secret%20Place%202%202012", "/Missouri%202012", "/Missouri%202012", "/Blackfoot%202012", "/Bitterroot%202012", "/Clark%20Fork%202012", "/Upper%20Big%20Horn%202012", "/Yellowstone%20Lower%20Second%202012", "/Colorado%202012", "/Newfoundland%202012", "/Labrador%202012", "/Upsalquitch%202012", "/Vermont%202012", "/Reunions%202012", "/Family%20Reunions%202012", "/Bourbon%20Tasting%202012", "/Florida%20Keys%202012", "/Soque%20May%202012", "/Catskill%20Fishing%202012", "/India%20-%20Kosi%20River%20at%20Corbett%20Park", "/India%20-%20Ramganga%20River%20at%20Corbett%20Park", "/India%20-%20Delhi%20and%20Agra", "/India%20-%20Silver%20Sands%20on%20Ganges%20River", "/India%20-%20Assi%20Ganga%20River%20Base%20Camp", "/India%20-%20Assi%20Ganga%20River%20Upper%20Section", "/India%20-%20Mussoorie", "/Salmon%20River%20February%202012", "/Salmon%20River%202011", "/Oak%20Orchard%20Creek%202011", "/Tennessee%202011", "/Soque%202011", "/Margaree%202011", "/Alaska%202011", "/Florida%202011", "/Roscoe%20Parade%202011", "/Delaware%20June%202011", "/Trout%20Parade%202011", "/Montauk%20June%202011", "/Senegal%20-%20Hakuna%20Matata", "/Senegal%20-%20Niokolo%20Kobo%20National%20Parc", "/Senegal%20-%20Dinner%20at%20Fred's%20Village", "/Senegal%20-%20Sobo%20Bade", "/Senegal%20-%20Bandia%20Game%20Farm", "/Senegal%20-%20Dakar", "/Ojai", "/Solvang", "/Cambria", "/Coast%20&%20Carmel", "/Salinas", "/San%20Francisco", "/Soque%20October%202010", "/Beaverhead%20and%20Big%20Hole%20Area", "/Yellowstone", "/Kootenai", "/Kelly%20Creek", "/Clark%20Fork", "/Upper%20Bighorn", "/Paris", "/Istanbul", "/Troy", "/Assos", "/Ephesus", "/Cesme", "/Istanbul%202", "/Kas", "/Kalkan", "/Dalyan", "/Istanbul%203", "/Paris%202", "/New%20England%20&%20Nova%20Scotia%202010", "/Algonquin", "/Restigouche%202010", "/May%202%202010%20Hike", "/May%2015%202010%20Hike", "/Catskill%20Fishing%202010", "/Soque%20April%202010", "/Delaware%202010", "/Christmas%2009,%20Beamoc%202010%20&%20Hiking", "/Winston%20Salem%20&%20Atlanta%202010", "/Florida", "/Austin%20&%20LBJ%20Ranch", "/Arizona", "/New%20Mexico", "/Denver%20&%20Drive%20Home", "/Chesapeake%202009", "/Soque%20Tournament%202009", "/CFFC&M%20Hall%20of%20Fame%202009", "/Roman%20Moser", "/Australia%202009%20Cairns", "/Australia%202009%20Cape%20York", "/Australia%202009%20Ayers%20Rock%20&%20Lost%20Canyon", "/Australia%202009%20Northwest%20Cape", "/Hawaii%202009", "/Sandhill%202009", "/White%20Mountains%202009", "/Adirondacks%202009", "/Striper%20Sight%20Fishing%202009", "/Holston%20River%20TN%202009", "/Big%20Pine%20Key%202009", "/Denver%202009", "/Nelson's%20Spring%20Creek%202009", "/DePuy%20Spring%20Creek%202009", "/South%20Fork%20Flathead%202009", "/French%20Catskill%20Outing", "/Hiking%20by%20Terry", "/Hiking%20by%20Virginia", "/Stocking", "/Soque%20Spring%202009", "/Spey%20Outing%202009", "/Outings%202009", "/Soque%202008", "/Baja", "/Moose%20Creek", "/Moose%20Creek%20by%20Sonja", "/White%20Mountains", "/July%202008%20Flood", "/En%20Route", "/Boiestown%20to%20Doaktown", "/Doaktown%20to%20Upper%20Blackville", "/Upper%20Blackville%20to%20Blackville", "/Tuckaway%20Cabins", "/Upper%20River", "/Blackville%20to%20Quarryville", "/Boca%20Grande%202008", "/Fishing%20the%20Jura", "/Cassis", "/Castelnau-Montmiral", "/Fontevraud-LAbbaye", "/Big%20Pine%20Key%202008", "/Andros%202008", "/Anglers'%20Outing%202008", "/New%20Zealand%202008%20%20--%20%20Best%20Fish", "/New%20Zealand%202008%20%20--%20%20En%20Route", "/New%20Zealand%202008%20%20--%20%20Napier", "/New%20Zealand%202008%20%20--%20%20Rangitikei", "/New%20Zealand%202008%20%20--%20%20Poronui", "/New%20Zealand%202008%20%20--%20%20Methven%20-%20Terry%20Photos", "/New%20Zealand%202008%20%20--%20%20Methven%20-%20Al%20Kircher%20Photos", "/New%20Zealand%202008%20%20--%20%20Nokomai%20Station", "/New%20Zealand%202008%20%20--%20%20Queenstown%20and%20West%20Coast", "/New%20Zealand%202008%20%20--%20%20Whataroa%20&%20Hokitika", "/New%20Zealand%202008%20%20--%20%20Clifftops%20Retreat", "/New%20Zealand%202008%20%20--%20%20Wellington", "/New%20Zealand%202008%20%20--%20%20Los%20Angeles%20Visit", "/Montauk%202007", "/Chesapeake%202007", "/Salmon%20River%202007", "/Soque%20Tournament%202007", "/Harkers%20Island%202007", "/Montauk%202007", "/Italy", "/Italy%20More", "/West%202007", "/Iceland", "/Labrador%202007", "/Western%20Maryland", "/Princeton%20Reunions%202007", "/Abaco", "/Patagonia%202007", "/Las%20Buitreras", "/Santa%20Cruz", "/Soque%20April-May%202007", "/Soque%202006", "/Harkers%20Island%202006", "/Montana%20and%20Wyoming", "/Hiking%20Catskills", "/Bahamas%202006", "/Labrador%202006", "/Flood%202006", "/France_2005-06", "/Norway%202005-06", "/France%20Fishing%20on%20the%20Seine%202005", "/Owens_River_2005", "/Michigan%202005", "/Hawaii_Wedding_and_Family_2005", "/Hawaii_Fishing_2005", "/Pennsylvania%202005", "/Livingston%20Manor%20Trout%20Parade%202005", "/Smith_River%202005", "/Missouri_River%202005", "/Labrador_2005", "/Newfoundland%202005", "/Cache_Creek%202005", "/Elk_River%202005", "/Dean_River%202005", "/Spatsizi_Wilderness%202005", "/Kispiox_and_Environs%202005", "/Montauk%202005", "/Australia%202004", "/Oregon%20Creek%202004", "/New_Zealand%202003", "/Michigan%202003", "/Soque_2003", "/Deschutes%202003", "/Utah%202003", "/Labrador_2002", "/Cascades%202003", "/San_Diego%202002", "/Henryville%202002-03", "/Patuxent_Potomac%202003", "/Michigan%202002", "/Bahamas%202002", "/Susquehanna%202002", "/San_Gabriel%202001", "/Meadow_Lane%202002", "/Mongolia%202001", "/Argentina%201999", "/Hawaii%202002"];
const limit = 1000;
let requests = 0;
const galleries = [];

function loopLinks(el, parentURL) {
    // console.log(el);
    const images = [];
    el.querySelectorAll('a').forEach(function(v) {
        if (v.pathname.toLowerCase().match(/(.png|.jpg)/g)) {
            // console.log(v.origin + parentURL + v.pathname);
            images.push(v.origin + parentURL + v.pathname);
        }
    });
    return images;
}

function galleryLoopImages(index) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const el = document.createElement('html');
            el.innerHTML = this.responseText;
            const galleryObj = {
                galleryId: routeIds[index],
                images: loopLinks(el, routeIds[index] + "/images"),
            };
            galleries.push(galleryObj);
            // console.log(galleryObj);
            // document.getElementById("demo").innerHTML = this.responseText;
            if (index < routeIds.length && requests <= limit) {
                galleryLoopImages(index + 1);
            }

        }
    };

    request.open("GET", routeIds[index] + "/images", true);

    request.onload = function() {
        // console.log('DONE', request.status);
        if (this.status == 404 && index < routeIds.length && requests <= limit) {
            galleryLoopSlides(index);
        } else {
            console.log(galleries);
        }
    };

    request.send();
    requests++;
}

function galleryLoopSlides(index) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const el = document.createElement('html');
            el.innerHTML = this.responseText;
            const galleryObj = {
                galleryId: routeIds[index],
                images: loopLinks(el, routeIds[index] + "/slides"),
            };
            // console.log(galleryObj);
            galleries.push(galleryObj);
            if (index < routeIds.length && requests <= limit) {
                galleryLoopSlides(index + 1);
            } else {
                console.log(galleries);
            }

        }
    };

    request.onload = function() {
        if (this.status == 404 && index < routeIds.length && requests <= limit) {
            galleryLoopImages(index);
        }
    };

    request.open("GET", routeIds[index] + "/slides/", true);
    request.send();
    requests++;
}