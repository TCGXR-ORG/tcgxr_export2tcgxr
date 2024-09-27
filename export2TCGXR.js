function Warning(text)
{  
	alert (text); 
	console.log (text);  
}

// ES6 class 
class EasyHTTP { 

    // Make an HTTP PUT Request 
    async put(url, data) { 
    
        // Awaiting fetch which contains method, 
        // headers and content-type and body 
        const response = await fetch(url, { 
        method: 'PUT', 
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data)
        }); 
        
        // Awaiting response.json() 
        const resData = await response.json(); 
    
        // Return response data 
        return resData; 
    } 
}

function OnImportClicked(){
    var devSecret = document.getElementById("DeveloperSecret").value;
    var customID = document.getElementById("CustomId").value;

    let dropdown = document.getElementById('GameAcronym');
    var gameAcronym = dropdown.options[dropdown.selectedIndex].text;

    var deckName = document.getElementById("DeckName").value;
    var deck = document.getElementById("Deck").value;

    // Instantiating new EasyHTTP class 
    const http = new EasyHTTP; 
    // User Data 
    const data = { 
        devSecret: devSecret,
        customID: customID,
        gameAcronym: gameAcronym,
        deckName: deckName,
        deck: deck
    } 

    // Update Post
    // Status: OK, InvalidDevSecret, InvalidDeckName, InvalidGameAcronym, InvalidDeck, InvalidCustomID, UpdateError
    http.put('https://www.unicorn-production.com/tcgxr/api/import.php', data) 

    // Resolving promise for response data 
    .then(data => Warning(JSON.stringify(data))) 

    // Resolving promise for error 
    .catch(err => Warning(err));
}

function OnGameAcronymChanged(){
    let dropdown = document.getElementById('GameAcronym');
    var gameAcronym = dropdown.options[dropdown.selectedIndex].text;

    if(gameAcronym == 'GA')
    {
        document.getElementById("DeckName").value = "Arisanna TD";
        var deck = "# Material Deck\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/spirit-of-water-alc.jpg:Spirit of Water\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/arisanna-herbalist-prodigy-alc.jpg:Arisanna, Herbalist Prodigy\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/arisanna-master-alchemist-alc.jpg:Arisanna, Master Alchemist\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/arisanna-astral-zenith-alc.jpg:Arisanna, Astral Zenith\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/cleric-robes-alcsd.jpg:Cleric Robes\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/ingredient-pouch-alcsd.jpg:Ingredient Pouch\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/life-essence-amulet-doa-alter.jpg:Life Essence Amulet\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/necklace-of-foresight-alcsd.jpg:Necklace of Foresight\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/prototype-staff-alcsd.jpg:Prototype Staff\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/scale-of-souls-alcsd.jpg:Scale of Souls\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/synth-disrupter-alcsd.jpg:Synth Disrupter\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/cosmic-astroscope-alcsd.jpg:Cosmic Astroscope";
        deck += "\n\n";
        deck += "# Main Deck\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/academy-attendant-alc.jpg:Academy Attendant\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/barter-herbs-alc.jpg:Barter Herbs\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/caretaker-drone-alc.jpg:Caretaker Drone\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/distilled-atrophy-alc.jpg:Distilled Atrophy\n4 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/foraging-servant-alcsd.jpg:Foraging Servant\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/potion-of-healing-alc.jpg:Potion of Healing\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/scry-the-skies-alc.jpg:Scry the Skies\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/serum-of-wisdom-alc.jpg:Serum of Wisdom\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/dormant-sacrificial-altar-alc.jpg:Dormant Sacrificial Altar\n4 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/essence-of-blizzards-alcsd.jpg:Essence of Blizzards\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/flash-freeze-alc.jpg:Flash Freeze\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/hypothermia-alc.jpg:Hypothermia\n2 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/perfect-repulsion-alc.jpg:Perfect Repulsion\n2 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/potion-infusion-clarity-alc.jpg:Potion Infusion: Clarity\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/potion-infusion-frostbite-alc.jpg:Potion Infusion: Frostbite\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/stream-of-consciousness-alc.jpg:Stream of Consciousness\n2 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/water-barrier-alcsd.jpg:Water Barrier\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/astra-sight-alc.jpg:Astra Sight\n3 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/cometfall-alc.jpg:Cometfall\n2 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/condensed-supernova-alc.jpg:Condensed Supernova\n4 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/cosmic-bolt-alcsd.jpg:Cosmic Bolt\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/potion-infusion-starlight-alc.jpg:Potion Infusion: Starlight\n1 http://ga-index-public.s3.us-west-2.amazonaws.com/cards/spellshield-astra-alc.jpg:Spellshield: Astra";
        document.getElementById("Deck").value = deck;
    }
    else if(gameAcronym == 'MTG')
    {
        document.getElementById("DeckName").value = "";
        document.getElementById("Deck").value = "";
    }
    else if(gameAcronym == 'YGO')
    {
        document.getElementById("DeckName").value = "";
        document.getElementById("Deck").value = "";
    }
}

OnGameAcronymChanged();
