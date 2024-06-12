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
    http.put('http://www.unicorn-production.com/tcgxr/api/import.php', data) 

    // Resolving promise for response data 
    .then(data => Warning(JSON.stringify(data))) 

    // Resolving promise for error 
    .catch(err => Warning(err));
}

function OnGameAcronymChanged(){
    let dropdown = document.getElementById('GameAcronym');
    var gameAcronym = dropdown.options[dropdown.selectedIndex].text;

    if(gameAcronym == 'GATCG')
    {
        document.getElementById("DeckName").value = "have-look-first";
        document.getElementById("Deck").value = "# Main Deck\n4 Dungeon Guide\n4 Fast Cure\n4 Gentle Respite\n4 Juggle Knives\n4 Reprogram\n4 Sable Remnant\n4 Scry the Skies\n1 Slice and Dice\n4 Thieving Cut\n1 Turbo Charge\n4 Beseech the Winds\n4 Sirocco Operative\n4 Excalibur, Cleansing Light\n4 Gleaming Cut\n4 Lightweaver's Assault\n4 Luxem Sight\n2 Uncover the Plot\n\n# Material Deck\n1 Spirit of Serene Wind\n1 Zander, Prepared Scout\n1 Zander, Deft Executor\n1 Zander, Blinding Steel\n1 Backup Charger\n1 Orb of Choking Fumes\n1 Quicksilver Grail\n1 Safeguard Amulet\n1 Tariff Ring\n1 Tithe Proclamation\n1 Insignia of the Corhazi\n1 Luxera's Map\n\n# https://silv.ie/deck/have-look-first/2";
    }
    else if(gameAcronym == 'MTGTCG')
    {
        document.getElementById("DeckName").value = "Eldrazi Incursion";
        document.getElementById("Deck").value = "1 Adarkar Wastes\n1 All Is Dust\n1 Ancient Stirrings\n1 Angelic Aberration\n1 Arcane Signet\n1 Artisan of Kozilek\n1 Ash Barrens\n1 Awakening Zone\n1 Azlask, the Swelling Scourge\n1 Battlefield Forge\n1 Benthic Anomaly\n1 Bismuth Mindrender\n1 Bonders' Enclave\n1 Brushland\n1 Cascading Cataracts\n1 Caves of Koilos\n1 Chittering Dispatcher\n1 Command Tower\n1 Corrupted Crossroads\n1 Crib Swap\n1 Deepfathom Skulker\n1 Dreamstone Hedron\n1 Drowner of Hope\n1 Elder Deep-Fiend\n1 Eldrazi Confluence\n1 Eldrazi Conscription\n1 Eldrazi Displacer\n1 Eldrazi Monument\n1 Eldrazi Temple\n1 Eldritch Immunity\n1 Endbringer\n1 Everflowing Chalice\n1 Exotic Orchard\n1 Forest\n1 Forsaken Monument\n1 Garruk's Uprising\n1 Glaring Fleshraker\n1 Hedron Archive\n1 Herald's Horn\n1 Hideous Taskmaster\n1 Idol of Oblivion\n1 Imprisoned in the Moon\n1 Inversion Behemoth\n1 Island\n1 Karplusan Forest\n1 Kozilek's Return\n1 Llanowar Wastes\n1 Morophon, the Boundless\n1 Mountain\n1 Mutated Cultist\n1 Mystic Forge\n1 Oblivion Sower\n1 Opal Palace\n1 Path of Ancestry\n1 Plains\n1 Reliquary Tower\n1 Return of the Wildspeaker\n1 Rishkar's Expertise\n1 Ruins of Oran-Rief\n1 Secluded Courtyard\n1 Selective Obliteration\n1 Shivan Reef\n1 Shrine of the Forsaken Gods\n1 Sifter of Skulls\n1 Sire of Stagnation\n1 Skittering Invasion\n1 Snapping Voidcraw\n1 Sol Ring\n1 Spawnbed Protector\n1 Spawning Bed\n1 Suffer the Past\n1 Sulfurous Springs\n1 Swamp\n1 Talisman of Curiosity\n1 Talisman of Dominance\n1 Talisman of Impulse\n1 Talisman of Resilience\n1 Tectonic Edge\n1 Temple of Malady\n1 Temple of Silence\n1 Tendo Ice Bridge\n1 Titans' Vanguard\n1 Tomb of the Spirit Dragon\n1 Tranquil Landscape\n1 Twins of Discord\n1 Twisted Landscape\n1 Ugin, the Ineffable\n1 Ugin's Insight\n1 Ulamog's Crusher\n1 Ulamog's Dreadsire\n1 Ulamog's Nullifier\n1 Unclaimed Territory\n1 Underground River\n1 Vile Redeemer\n1 Warping Wail\n1 Wastes\n1 Wastescape Battlemage\n1 World Breaker\n1 Yavimaya Coast\n\n1 Ulalek, Fused Atrocity\n";
    }
    else if(gameAcronym == 'YGOTCG')
    {
        document.getElementById("DeckName").value = "2024 Illusion Chimera";
        document.getElementById("Deck").value = "3 Gazelle the King of Mythical Claws\n3 Mirror Swordknight\n1 Master Tao the Chanter\n1 Diabellze the Original Sinkeeper\n2 Big-Winged Berfomet\n3 Nightmare Apprentice\n2 Edge Imp Chain\n3 Cornfield Coatl\n3 Effect Veiler\n2 Lightning Storm\n1 Harpie's Feather Duster\n2 Polymerization\n1 Called by the Grave\n3 Forbidden Droplet\n3 Triple Tactics Talent\n3 Frightfur Patchwork\n1 Super Polymerization\n3 Chimera Fusion\n3 Upstart Goblin\n3 Infinite Impermanence\n1 Magnum the Reliever\n1 Chimera the King of Phantom Beasts\n1 Knightmare Phoenix\n2 Guardian Chimera\n1 Chaos Angel\n1 Beatrice, Lady of the Eternal\n1 S:P Little Knight\n1 Evolzar Lars\n1 Chimera the Illusion Beast\n2 Berfomet the Mythical King of Phantom Beasts\n1 Predaplant Dragostapelia\n1 Muckraker From the Underworld\n1 Super Starslayer TY-PHON - Sky Crisis";
    }
}

OnGameAcronymChanged();
