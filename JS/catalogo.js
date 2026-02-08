// SIMULACIÓN DE TUS DATOS (¡A COMPLETAR!)
const grupos = [
    "Proteinas", "Creatinas", "PreWorks / Pre Entrenos", "Aminoacidos / Bcaas", "Ganadores de Peso / Gainers", "Quemadores / Fat Burners", "Oxido Nitritco"
];

const productos = [
    // productos de Proteinas
    { nombre: "100% WHEY PROTEIN 2 Lbs (908 Grs) Gold Nutriton Sin Tacc", imagen_url: "100% WHEY PROTEIN 2 Lbs (908 Grs) Gold Nutriton Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "100% WHEY PROTEIN 5 Lbs (2,3 Kg) Gold Nutriton Sin Tacc", imagen_url: "100% WHEY PROTEIN 5 Lbs (2,3 Kg) Gold Nutriton Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Proteina Vegetal 2 Lbs Gold Nutrition Sin Tacc", imagen_url: "Proteina Vegetal 2 Lbs Gold Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "SOY PROTEIN Proteína de soja 1 Kg Pulver Sin Tacc", imagen_url: "SOY PROTEIN Proteína de soja 1 Kg Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Best Whey 2 Lbs (Creatina + Taurina) Xtrenght Nutrition Sin Tacc", imagen_url: "Best Whey 2 Lbs (Creatina + Taurina) Xtrenght Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Advance Whey 2 Lbs (Blend De Proteinas) Xtrenght Nutrition Sin Tacc", imagen_url: "Advance Whey 2 Lbs (Blend De Proteinas) Xtrenght Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "100% Whey Protein Suero 2 Lbs NP (New Protein) DOY PACK", imagen_url: "100 Whey Protein Suero 2 Lbs NP New Protein DOY PACK.jpg", grupo: "Proteinas" },
    { nombre: "100% Whey Protein Suero 1 Kg NEIX DOY PACK", imagen_url: "100 Whey Protein Suero 1 Kg NEIX DOY PACK.jpg", grupo: "Proteinas" },
    { nombre: "100% Whey Protein Suero 1 Kg EDN", imagen_url: "100 Whey Protein Suero 1 Kg EDN.jpg", grupo: "Proteinas" },
    { nombre: "Proteina Aislada de soja 1Kg EDN", imagen_url: "Proteina Aislada de soja 1Kg EDN.jpg", grupo: "Proteinas" },
    { nombre: "Lacprodan 1kg EDN (Proteina de suero sin saborizar)", imagen_url: "Lacprodan 1kg EDN.jpg", grupo: "Proteinas" },
    { nombre: "Albumina Eggy 1 Kg (Natural, chocolate o vainilla) EDN", imagen_url: "Albumina Eggy 1 Kg EDN.jpg", grupo: "Proteinas" },
    { nombre: "AX Albumina 1 Kg (Natural, chocolate o vainilla) ATHOMX", imagen_url: "AX Albumina 1 Kg ATHOMX.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Suero 1 Kg DOY PACK Athomx", imagen_url: "Proteina de Suero 1 Kg DOY PACK Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Suero 1 Kg Athomx", imagen_url: "Proteina de Suero 1 Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Suero 5 Kg Athomx", imagen_url: "Proteina de Suero 5 Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Soja 1 Kg Athomx", imagen_url: "Proteina de Soja 1 Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Soja 5 Kg Athomx", imagen_url: "Proteina de Soja 5 Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Cutter Whey Protein Cutax 1 Kg Athomx (Proteina + Quemador)", imagen_url: "Cutter Whey Protein Cutax 1 Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Isobot Proteina Isolada 1Kg Athomx", imagen_url: "Isobot Proteina Isolada 1Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Huevo Saborizada Chocolate, Frutilla o Vainilla 2 Lbs Ovofull", imagen_url: "Proteina de Huevo Saborizada 2 Lbs Ovofull.jpg", grupo: "Proteinas" },
    { nombre: "Vegetal Protein Pea Isolate 1 Kg EDN", imagen_url: "Vegetal Protein Pea Isolate 1 Kg EDN.jpg", grupo: "Proteinas" },
    { nombre: "Best Whey 1 Kg Nutrilab", imagen_url: "Best Whey 1 Kg Nutrilab.jpg", grupo: "Proteinas" },
    { nombre: "Whey Pro 2.0 Classic Line 1 Kg Nutrilab", imagen_url: "Whey Pro 2.0 Classic Line 1 Kg Nutrilab.jpg", grupo: "Proteinas" },
    { nombre: "Classic Whey Protein 2 Lb Proteína De Suero On Fit Nutrition", imagen_url: "Classic Whey Protein 2 Lb Proteína De Suero On Fit Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Just Whey Protein 2 Lbs Star Nutrition Sin Tacc", imagen_url: "Just Whey Protein 2 Lbs Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Just Plant Protein 2 Lbs Star Nutrition Sin Tacc", imagen_url: "Just Plant Protein 2 Lbs Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Collagen Whey Protein 2 Lbs Star Nutrition Sin Tacc", imagen_url: "Collagen Whey Protein 2 Lbs Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey Protein x 2lb - DOYPACK Star Nutrition Sin Tacc", imagen_url: "Whey Protein x 2lb - DOYPACK Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Platinum Whey Protein 2 Lbs Star Nutrition Sin Tacc", imagen_url: "Platinum Whey Protein 2 Lbs Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Platinum Whey Protein 3Kg Star Nutrition Sin Tacc", imagen_url: "Platinum Whey Protein 3Kg Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Platinum ISO WHEY X 1 Kgrs Star Nutrition Sin Tacc Apto Diabeticos", imagen_url: "Platinum ISO WHEY X 1 Kgrs Star Nutrition Sin Tacc Apto Diabeticos.jpg", grupo: "Proteinas" },
    { nombre: "WHEY PROTEIN Concentrate 2LB Protein Project", imagen_url: "WHEY PROTEIN Concentrate 2LB Protein Project.jpg", grupo: "Proteinas" },
    { nombre: "WHEY PROTEIN Isolate x 2 Lbs Protein Project", imagen_url: "WHEY PROTEIN Isolate x 2 Lbs Protein Project.jpg", grupo: "Proteinas" },
    { nombre: "WHEY RIPPED 2 Lbs Gold Nutriton Sin Tacc", imagen_url: "WHEY RIPPED 2 Lbs Gold Nutriton Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "ISO WHEY ISOLATE 2 Lbs Gold Nutriton Sin Tacc", imagen_url: "ISO WHEY ISOLATE 2 Lbs Gold Nutriton Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Fit Whey Protein 2 Lbs Generation Fit Sin Tacc", imagen_url: "Fit Whey Protein 2 Lbs Generation Fit Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Fit Whey Protein 5 Lbs Generation Fit Sin Tacc", imagen_url: "Fit Whey Protein 5 Lbs Generation Fit Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Amino Total 1 Kg Pulver Sin Tacc", imagen_url: "Amino Total 1 Kg Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Amino Total 2 Kg Pulver Sin Tacc", imagen_url: "Amino Total 2 Kg Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Prolac Protein Proteína de suero 1Kg  Pulver Sin Tacc", imagen_url: "Prolac Protein Proteína de suero 1Kg  Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Prolac Protein Proteína de suero 2Kg  Pulver Sin Tacc", imagen_url: "Prolac Protein Proteína de suero 2Kg  Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Pea Isolate Protein 1 Kg Pulver Sin Tacc", imagen_url: "Pea Isolate Protein 1 Kg Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey Protein 1Kg Body Advance", imagen_url: "Whey Protein 1Kg Body Advance.jpg", grupo: "Proteinas" },
    { nombre: "Whey Protein 3Kg Body Advance", imagen_url: "Whey Protein 3Kg Body Advance.jpg", grupo: "Proteinas" },
    { nombre: "Proteina Vegana 910 Grs Body Advance", imagen_url: "Proteina Vegana 910 Grs Body Advance.jpg", grupo: "Proteinas" },
    { nombre: "100% Pure Whey Lacprodan 1 kg Body Advance", imagen_url: "100% Pure Whey Lacprodan 1 kg Body Advance.jpg", grupo: "Proteinas" },
    { nombre: "Whey 7900 AFA 500 Grs Gentech Sin Tacc", imagen_url: "Whey 7900 AFA 500 Grs Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey 7900 AFA 1 Kg (Bolsa)  Gentech Sin Tacc", imagen_url: "Whey 7900 AFA 1 Kg (Bolsa)  Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey 7900 AFA 908 Grs (Pote) Gentech Sin Tacc", imagen_url: "Whey 7900 AFA 908 Grs (Pote) Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey 7900 Monster Size 3 Kg Gentech Sin Tacc", imagen_url: "Whey 7900 Monster Size 3 Kg Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Premium Whey Protein 500 Grs Gentech Sin Tacc", imagen_url: "Premium Whey Protein 500 Grs Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Premium Whey Protein 1 Kg Gentech Sin Tacc", imagen_url: "Premium Whey Protein 1 Kg Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Veggie Protein 500grs Gentech Sin Tacc", imagen_url: "Veggie Protein 500grs Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Usa Whey Protein (+Enzymas) 945 Grs HTN Nutriton", imagen_url: "Usa Whey Protein (+Enzymas) 945 Grs HTN Nutriton.jpg", grupo: "Proteinas" },
    { nombre: "Usa Whey Protein (+Enzymas) 1710 Grs HTN Nutriton", imagen_url: "Usa Whey Protein (+Enzymas) 1710 Grs HTN Nutriton.jpg", grupo: "Proteinas" },
    { nombre: "USA SOY Pro ISOLATE (+ Enzyme) 1 Kg HTN Nutrition", imagen_url: "USA SOY Pro ISOLATE (+ Enzyme) 1 Kg HTN Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "XT GOLD Protein (+ Enzyme) 1015 Grs. HTN Nutrition", imagen_url: "XT GOLD Protein (+ Enzyme) 1015 Grs. HTN Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "ESCULTOR 1500 30 Serv Nutremax Sin Tacc", imagen_url: "ESCULTOR 1500 30 Serv Nutremax Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey Protein 30 Serv Nutremax Sin Tacc", imagen_url: "Whey Protein 30 Serv Nutremax Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "True Made 2,05 Lbs ENA Sport", imagen_url: "True Made 2,05 Lbs ENA Sport.jpg", grupo: "Proteinas" },
    { nombre: "Whey Pro Build 2 Lbs (908 Grs) Painlabs", imagen_url: "Whey Pro Build 2 Lbs (908 Grs) Painlabs.jpg", grupo: "Proteinas" },
    { nombre: "Syntha 6 Classic 2,91 Lbs (28 Serv) Bsn", imagen_url: "Syntha 6 Classic 2,91 Lbs (28 Serv) Bsn.jpg", grupo: "Proteinas" },
    { nombre: "Syntha 6 Classic 5 Lbs (48 Serv) Bsn", imagen_url: "Syntha 6 Classic 5 Lbs (48 Serv) Bsn.jpg", grupo: "Proteinas" },
    { nombre: "Syntha 6 Edge 2,47 Lbs 28 (Serv) Bsn", imagen_url: "Syntha 6 Edge 2,47 Lbs 28 (Serv) Bsn.jpg", grupo: "Proteinas" },
    { nombre: "Gold Whey Standard 1,5 Lbs Optimum Nutrition", imagen_url: "Gold Whey Standard 1,5 Lbs Optimum Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Gold Whey Standard 2 Lbs Optimum Nutrition", imagen_url: "Gold Whey Standard 2 Lbs Optimum Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Nitrotech Whey Protein 2.2 Lbs MUSCLETECH", imagen_url: "Nitrotech Whey Protein 2.2 Lbs MUSCLETECH.jpg", grupo: "Proteinas" },
    { nombre: "Nitrotech Whey Gold 2 Lbas MUSCLETECH", imagen_url: "Nitrotech Whey Gold 2 Lbas MUSCLETECH.jpg", grupo: "Proteinas" },
    { nombre: "Impact Whey Protein 1 Kg My Protein", imagen_url: "Impact Whey Protein 1 Kg My Protein.jpg", grupo: "Proteinas" },
    { nombre: "Impact Whey Isolate 1 Kg My Protein", imagen_url: "Impact Whey Isolate 1 Kg My Protein.jpg", grupo: "Proteinas" },
    { nombre: "100% Whey Protein flavour 900 Grs Athletica Nutrition", imagen_url: "100% Whey Protein flavour 900 Grs Athletica Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Best Whey Protein 900 grs Athletica Nutrition", imagen_url: "Best Whey Protein 900 grs Athletica Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Whey Tech 2Lbs Concentrado + Isolado Athletica Nutrition", imagen_url: "Whey Tech 2Lbs Concentrado + Isolado Athletica Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Loaded Whey Protein 27 Serv Ryse Nutrition", imagen_url: "Loaded Whey Protein 27 Serv Ryse Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Loaded Plant Protein 20 Serv Ryse Nutrition", imagen_url: "Loaded Plant Protein 20 Serv Ryse Nutrition.jpg", grupo: "Proteinas" },

    // productos de Creatinas
    { nombre: "Creatina Mono hidrato Micronizada 300 Grs NP New Protein", imagen_url: "Creatina Mono hidrato Micronizada 300 Grs NP New Protein.jpg", grupo: "Creatinas" },
    { nombre: "Crea Shock 30 Serv (Uva o Anana) Nutrilab", imagen_url: "Crea Shock 30 Serv (Uva o Anana) Nutrilab.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Ready 300 Grs Nutrilab", imagen_url: "Creatina Ready 300 Grs Nutrilab.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs Muscle Concept", imagen_url: "Creatina Monohidrato 300 Grs Muscle Concept.jpg", grupo: "Creatinas" },
    { nombre: "Creatina + Monohidrato 300 Grs Positive +", imagen_url: "Creatina + Monohidrato 300 Grs Positive +.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs Dark Mood", imagen_url: "Creatina Monohidrato 300 Grs Dark Mood.jpg", grupo: "Creatinas" },
    { nombre: "Bio Creatina Monohidrato 300 Grs Biologics", imagen_url: "Bio Creatina Monohidrato 300 Grs Biologics.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs New Made", imagen_url: "Creatina Monohidrato 300 Grs New Made.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300Grs Gold Nutrition Sin Tacc", imagen_url: "Creatina Monohidrato 300Grs Gold Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina 100% Pura Micronizada 300 Grs Painlabs", imagen_url: "Creatina 100% Pura Micronizada 300 Grs Painlabs.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 300Grs ENA", imagen_url: "Creatina Micronizada 300Grs ENA.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs 60 Serv OVOFULL", imagen_url: "Creatina Monohidrato 300 Grs 60 Serv OVOFULL.jpg", grupo: "Creatinas" },
    { nombre: "Monohidrato De Creatina 300 Grs Ultra Tech", imagen_url: "Monohidrato De Creatina 300 Grs Ultra Tech.jpg", grupo: "Creatinas" },
    { nombre: "TNT 500 Grs (25 Serv) (Creatina + Arginina) Frutos del bosque Gentech Sin Tacc", imagen_url: "TNT 500 Grs (25 Serv) (Creatina + Arginina) Frutos del bosque Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Masticables 150 Tabs Gentech Sin Tacc", imagen_url: "Creatina Masticables 150 Tabs Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 250 Grs Gentech Sin Tacc", imagen_url: "Creatina Monohidrato 250 Grs Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 500 Grs Gentech Sin Tacc", imagen_url: "Creatina Monohidrato 500 Grs Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs Generation Fit Vegan", imagen_url: "Creatina Monohidrato 300 Grs Generation Fit Vegan.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato Micronizada 250 Grs HTN", imagen_url: "Creatina Monohidrato Micronizada 250 Grs HTN.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato Micronizada 500 Grs HTN", imagen_url: "Creatina Monohidrato Micronizada 500 Grs HTN.jpg", grupo: "Creatinas" },
    { nombre: "Cell Pack 1.4kg Creatina Arginina Glutamina Amino Bcaa HTN", imagen_url: "Cell Pack 1.4kg Creatina Arginina Glutamina Amino Bcaa HTN.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 20 Serv Con Vitamina C One Fit Nutrition", imagen_url: "Creatina Micronizada 20 Serv Con Vitamina C One Fit Nutrition.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 100 Serv Con Vitamina C One Fit Nutrition", imagen_url: "Creatina Micronizada 100 Serv Con Vitamina C One Fit Nutrition.jpg", grupo: "Creatinas" },
    { nombre: "Creapure Creatina Alemana Neutra 300 Grs X Body Evolution", imagen_url: "Creapure Creatina Alemana Neutra 300 Grs X Body Evolution.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 250 grs EDN", imagen_url: "Creatina Monohidrato 250 grs EDN.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato Micronizada 1000 300 Grs Neix", imagen_url: "Creatina Monohidrato Micronizada 1000 300 Grs Neix.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato Micronizada 1000 1 Kg Neix", imagen_url: "Creatina Monohidrato Micronizada 1000 1 Kg Neix.jpg", grupo: "Creatinas" },
    { nombre: "Micro Creatine 1000 60 Serv Micronizada Athomx Oferta!!!", imagen_url: "Micro Creatine 1000 60 Serv Micronizada Athomx Oferta!!!.jpg", grupo: "Creatinas" },
    { nombre: "Creatina monohidrato Ultra Micronizada 150 Grs Star Nutrition Sin Tacc", imagen_url: "Creatina monohidrato Ultra Micronizada 150 Grs Star Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina monohidrato Ultra Micronizada 300 Grs DOY PACK Star Nutrition Sin Tacc", imagen_url: "Creatina monohidrato Ultra Micronizada 300 Grs DOY PACK Star Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina monohidrato Ultra Micronizada 300 Grs Star Nutrition Sin Tacc", imagen_url: "Creatina monohidrato Ultra Micronizada 300 Grs Star Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina monohidrato Ultra Micronizada 500 Grs Star Nutrition Sin Tacc", imagen_url: "Creatina monohidrato Ultra Micronizada 500 Grs Star Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina monohidrato Ultra Micronizada 1 Kg Star Nutrition Sin Tacc", imagen_url: "Creatina monohidrato Ultra Micronizada 1 Kg Star Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 150 Grs Body Advance", imagen_url: "Creatina Micronizada 150 Grs Body Advance.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Power 300 Grs Body Advance", imagen_url: "Creatina Power 300 Grs Body Advance.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 100% 200 Grs 66 Serv Nutremax Sin Tacc", imagen_url: "Creatina Micronizada 100% 200 Grs 66 Serv Nutremax Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 150 Grs 30 Serv Pulver Sin Tacc", imagen_url: "Creatina Monohidrato 150 Grs 30 Serv Pulver Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs 60 Serv Pulver Sin Tacc", imagen_url: "Creatina Monohidrato 300 Grs 60 Serv Pulver Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 500 Grs 100 Serv Pulver Sin Tacc", imagen_url: "Creatina Monohidrato 500 Grs 100 Serv Pulver Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs Mervick", imagen_url: "Creatina Monohidrato 300 Grs Mervick.jpg", grupo: "Creatinas" },
    { nombre: "Creatina  Premium GLUCOSA + CREATINA + GLUTAMINA + TAURINA 1 Kg Mervick", imagen_url: "Creatina  Premium GLUCOSA + CREATINA + GLUTAMINA + TAURINA 1 Kg Mervick.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 250 Grs Xtenght Nutrition Sin Tacc", imagen_url: "Creatina Micronizada 250 Grs Xtenght Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 500 Grs Xtenght Nutrition Sin Tacc", imagen_url: "Creatina Micronizada 500 Grs Xtenght Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina 300 Grs KN Nutrition", imagen_url: "Creatina 300 Grs KN Nutrition.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 300 Grs (60 Serv) Optimun Nutrition", imagen_url: "Creatina Micronizada 300 Grs (60 Serv) Optimun Nutrition.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato Micronizada 309 Grs (60 Serv) BSN", imagen_url: "Creatina Monohidrato Micronizada 309 Grs (60 Serv) BSN.jpg", grupo: "Creatinas" },
    { nombre: "Cell Tech 3,3 Lbs MUSCLETECH", imagen_url: "Cell Tech 3,3 Lbs MUSCLETECH.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 250 Grs My Protein", imagen_url: "Creatina Monohidrato 250 Grs My Protein.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 500 Grs My Protein", imagen_url: "Creatina Monohidrato 500 Grs My Protein.jpg", grupo: "Creatinas" },
    { nombre: "100% Pure Creatina 300 Grs Athletica Nutrition", imagen_url: "100% Pure Creatina 300 Grs Athletica Nutrition.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs Ryse Nutrition", imagen_url: "Creatina Monohidrato 300 Grs Ryse Nutrition.jpg", grupo: "Creatinas" },

    // productos de PreWorks / Pre Entrenos
    { nombre: "Maltodextrina Plus 1 Kg Pulver Sin Tacc", imagen_url: "Maltodextrina Plus 1 Kg Pulver Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Maltodextrina Plus 2 Kg Pulver Sin Tacc", imagen_url: "Maltodextrina Plus 2 Kg Pulver Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Maltodrexina 1 Kg Lenta absorcion Athomx", imagen_url: "Maltodrexina 1 Kg Lenta absorcion Athomx.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Maltodextrina Just Carb 1 Kg Star Nutrition Sin Tacc", imagen_url: "Maltodextrina Just Carb 1 Kg Star Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Taurus Amino 20 Serv Pulver Sin Tacc", imagen_url: "Taurus Amino 20 Serv Pulver Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre steam pump 300 Grs Frutilla Athomx", imagen_url: "Pre steam pump 300 Grs Frutilla Athomx.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre entreno V 12 Storm 300 Grs Athomx", imagen_url: "Pre entreno V 12 Storm 300 Grs Athomx.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre work 20 Serv Mango Gold Nutrition Sin Tacc", imagen_url: "Pre work 20 Serv Mango Gold Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Killer 5.0 25 Serv Generacion Fit  Sin Tacc", imagen_url: "Killer 5.0 25 Serv Generacion Fit  Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Killer Strike 25 Serv Generation Fit Sin Tacc", imagen_url: "Killer Strike 25 Serv Generation Fit Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Ultra Predator 25 Serv / 300 Grs Generation Fit", imagen_url: "Ultra Predator 25 Serv 300 Grs Generation Fit.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre War 400 Grs / 20 Serv ENA", imagen_url: "Pre War 400 Grs 20 Serv ENA.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Slash Pre Work out 30 Serv / 360 Grs IDN NUTRITION", imagen_url: "Slash Pre Work out 30 Serv 360 Grs IDN NUTRITION.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "TNT Dynamite 240 Grs / 30 Serv Star Nutrition Sin Tacc", imagen_url: "TNT Dynamite 240 Grs 30 Serv Star Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "PUMP 3D Ripped 45 Serv Star Nutrition Sin Tacc", imagen_url: "PUMP 3D Ripped 45 Serv Star Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Star V8 285 Grs / 30 Serv Star Nutrition Sin Tacc", imagen_url: "Star V8 285 Grs 30 Serv Star Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Beast Blood 280 Grs Body Advance", imagen_url: "Beast Blood 280 Grs Body Advance.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Beta Xplode 210 Grs Htn Nutrition", imagen_url: "Beta Xplode 210 Grs Htn Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Paranormal 30 Serv Painlabs", imagen_url: "Paranormal 30 Serv Painlabs.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Lethal V3.0 30 Serv Painlabs", imagen_url: "Lethal V3.0 30 Serv Painlabs.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Lethal Human Beast 30 Serv Painlabs", imagen_url: "Lethal Human Beast 30 Serv Painlabs.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Lethal American Psycho 30 Serv Painlabs", imagen_url: "Lethal American Psycho 30 Serv Painlabs.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre N.O. Explosive Energy XP Oxido Nítrico, Cafeina Y Ginseng Ultra Tech", imagen_url: "Pre N.O. Explosive Energy XP Oxido Nítrico Cafeina Y Ginseng Ultra Tech.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Gold Standard Pre Work Out 30 Serv Optimum Nutrition", imagen_url: "Gold Standard Pre Work Out 30 Serv Optimum Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Kryptonite Extreme 180 gr. 30 Serv Kn Nutrition", imagen_url: "Kryptonite Extreme 180 gr 30 Serv Kn Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "C4 Ultimate 20 Serv Cellucor", imagen_url: "C4 Ultimate 20 Serv Cellucor.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Mesomorph 25 Serv APS Nutrition", imagen_url: "Mesomorph 25 Serv APS Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Nitraflex Advanced 30 Serv GAT Sports", imagen_url: "Nitraflex Advanced 30 Serv GAT Sports.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Psychotic 35 Serv Insane Labs", imagen_url: "Psychotic 35 Serv Insane Labs.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Loaded Pre 30 Serv Ryse Nutrition", imagen_url: "Loaded Pre 30 Serv Ryse Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 60 Caps Natural Whey", imagen_url: "Cafeina Anhydrous 60 Caps Natural Whey.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 20 grs (Polvo materia prima) Natural Whey", imagen_url: "Cafeina Anhydrous 20 grs Polvo materia prima Natural Whey.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 50 grs (Polvo materia prima) Natural Whey", imagen_url: "Cafeina Anhydrous 50 grs Polvo materia prima Natural Whey.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 500 Grs (Polvo materia prima) Natural Whey", imagen_url: "Cafeina Anhydrous 500 Grs Polvo materia prima Natural Whey.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 1 Kg (Polvo materia prima) Natural Whey", imagen_url: "Cafeina Anhydrous 1 Kg Polvo materia prima Natural Whey.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 200 Mg 30 Tabs Star Nutrition", imagen_url: "Cafeina Anhydrous 200 Mg 30 Tabs Star Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeina Anhydrous 200 x 90 Tabs Body Advance", imagen_url: "Cafeina Anhydrous 200 x 90 Tabs Body Advance.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeine 200 30 serv / 60 Caps Nutremax Sin Tacc", imagen_url: "Cafeine 200 30 serv 60 Caps Nutremax Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Cafeine Booster 200 30 serv / 90 Caps Nutremax Sin Tacc", imagen_url: "Cafeine Booster 200 30 serv 90 Caps Nutremax Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },

    // productos de Aminoacidos / Bcaas
    { nombre: "Proteina de Suero 80% Concentrada Nacional 1Kg Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Proteina de Soja 90 % Isolada 1Kg Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Proteina De Arveja 85% Concentrada Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Albumina Deshidratada 1Kg (270 CLARAS) Ovofull", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Albumina Hidrolizada 750Grs(205 CLARAS) Ovofull", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Albumina Deshidratada 370 Grs = 100 Claras Ovofull", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Huevo entero en polvo 1 Kg (80 Huevos) Ovofull", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Taurina 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Taurina 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Arginina 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Arginina 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Glutamina 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Glutamina 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C 250Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C 1 Kg EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C 2 Kg EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado 1 Kg EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado 1 Kg + Cloruro Magnesio 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio 1 Kg EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Colageno tipo 2 UCII No Desnaturalizado 60 Caps Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado Puro En Polvo 500 Grs Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado Puro En Polvo 1 Kg Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio Israel 500 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio Israel 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 500 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Potasio 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Potasio 500 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Potasio 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Creatina monohidrato pura 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Creatina monohidrato pura 500 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Creatina monohidrato pura 1 kG NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Bicarbonato de sodio uso culinario 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Bicarbonato de sodio Grado Alimentario 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Glucosamina 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascobico 60 Caps Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 100 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 500 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Arginina 250 grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Arginina 500 grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrulina Malato 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrulina Malato 500 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Citrulina 250 grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "L Citrulina 500 grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 250 grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 500 grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Taurina 100 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Taurina 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Cistina 100 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Carbonato de Magnesio Liviano 250 Grs Pureza 99,9% NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Carbonato de Magnesio Liviano 500 Grs Pureza 99,9% NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Carbonato de Magnesio Liviano 1 Kg Pureza 99,9% NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Sulfato de Magnesio (Sales de Epsom) 1 Kg NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Glutation Reduced Form USP 10 Grs Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Glicinato de Magnesio USP 250 Grs Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Bisglicinato de Magnesio USP 250 Grs Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Bisglicinato de Magnesio USP 500 Grs Natural Whey", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 1 Kg EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de potasio 250 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de potasio 500 Grs EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de potasio 1 Kg EDN", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "PROSALTS Cápsulas de electrolitos 60 Caps Nutremax Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 150 Grs On Fit Nutrition", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 450 Grs On Fit Nutrition", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 260 Grs Generation Fit", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 60 Caps Vegetales Gold Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 60 Caps Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 500 Grs Star Nutrition Sin Tacc (Natural O Frutos del Bosque)", imagen_url: "placeholder.jpg", grupo: "Materias Primas" },

    { nombre: "100% Glutamina micronizada 300 Grs New Protein", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Lisina Clorohidrato 100 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Lisina Clorohidrato 250 Grs NATURAL WHEY", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "GlutaAx  Glutamina 300 Grs Durazno Athomx", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA AMINO 8.1.1 20 serv / 280 Grs Body Advance", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina 300 grs Body Advance", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Eaas Amino 9 aminoacidos Esenciales 300 Grs / 20 Serv Body Advance", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Mtor Bcaa Evolution 290Grs / 20 Serv Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "EAA´S Essential Amino 20 Serv Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina x 150Grs Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina x 300Grs Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA 2000 120 Tabs Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA 2000 120 Tabs Gold Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Gold 280 grs / 20 Serv Grape Fruit Gold Nutriton Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Essential 30 Serv Gold Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L-GLUTAMINE MICRONIZED 225 Grs Gold Nutriton Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L-GLUTAMINA 100% x 150 Grs Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Arginina 150 Grs / 30 serv Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Bcaa 211 150 Grs / 30 Serv Pomelo Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Bcaa 211 120 Caps / 30 Serv Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Citrato De Magnesio 300 grs / 100 Serv Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Beta Alanina 60 Tabs ENA Sport", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L Glutamina Micronizada 150grs Htn", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L Glutamina Micronizada 300grs Htn", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "β-BCAA 8.0 (+ Enzyme) 30 Serv HTN Nutrition Apto vegano y Diabetico", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Hydro Bcaa Pro 4:1:1 360 Gr Xtrenght Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina 300 Grs Kn Nutrition", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino X 30 Serv BSN", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino X 70 Serv BSN", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Energy 30 Serv Optimum Nutrition", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA Tropical V2 250g My Protein Myvitamin", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA + EAA 30 Sev Ryse Nutrition", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },

    // productos de Ganadores de Peso / Gainers
    { nombre: "Muscle Mass Gainer Gold 5 Lbs Gold Nutrition Sin Tacc (vainilla / chocolate)", imagen_url: "Muscle Mass Gainer Gold 5 Lbs Gold Nutrition Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Mutant Mass x 1,5 Kilos Star Nutrition Sin Tacc", imagen_url: "Mutant Mass x 1,5 Kilos Star Nutrition Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Mass Generator 1,5 Kg Athmox", imagen_url: "Mass Generator 1,5 Kg Athmox.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Plus Gainer  1,5 Kg Pulver Sin Tacc", imagen_url: "Plus Gainer  1,5 Kg Pulver Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },

    // productos de Quemadores / Fat Burners
    {
        nombre: "Alfajor Proteico 60 Grs Day By Day (Por unidad)", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Alfajor Proteico 60 Grs Day By Day (Por caja 12 unid)", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Bar Protein Barra 46Grs Gentech (Por unidad) Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Low Carb Barra 45Grs Gentech (Por unidad) Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Veggie Bar 45Grs Gentech (Por Unid) Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Mervick 65 Grs (Por Unidad)", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Low Carb Mervick 46 Grs (Por Unidad)", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "PULVER POWER Barra Proteica (Por unidad) Caja 12 Unid Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Prosnick Protein Bar 46 Grs (Por caja) Body Advance", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Proteicas Bigual 50 Grs (Original, Café, Cacao Amargo) BIGUAL SIN TACC", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Bar Protein Barra 46Grs Gentech (Por caja 20 unidades) Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Low Carb Barras 45Grs Gentech (Por Caja 10 Unid) Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Veggie Bar 45Grs Gentech (Por Caja 10 Unid) Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Mervick 65 Grs (12 Unid por caja)", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Low Carb Mervick 46 Grs (12 Unid por caja)", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "PULVER POWER Barra Proteica (Chocolate - frutilla) Caja 12 Unid Pulver Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hydroplus Endurance 700 grs Rinde 10 lts Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Gel BCAA 20 Grs x 6 Sobres Gentech Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Gel Con Cafeina X 24u 20gr Unid Gentech Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel 12 Pouch x 40Grs Mervick",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Gel Carbotene 10 Pouches De 40gr Pulver Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hidratade 600 Grs Pulver Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hidratade 1Kg Pulver Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hidratade 2Kg Pulver Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Power Drink 500 Grs (20 Sobres) Pulver Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "GO! Energy gel 10 x 30 Grs Atlhetica Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "GO! Recovery Gel 10 x 30 Grs Atlhetica Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Best Whey Bar 12 x 30 Grs Athletica Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "HYDROMAX Sport Drink 600 Grs 9 Lts Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "HYDROMAX Sport Drink 1520 Grs 23 Lts Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "HYDROMAX Sport Drink 660 Grs (20 Sobres/10Lts) Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "RECOVERY Drink 540 Grs 4,5 Lts Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "RECOVERY Drink 1500 Grs 12,5 Lts Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "RECOVERY Drink 600 Grs (10 sobres/5Lts) Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel 12 Pouch x 33Grs Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Extreme Energy 20 Sobres 40 Grs C/U Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Extreme Energy 560 Grs Nutremax Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel Con Cafeina 32 Grs x 12 Unid Ultratech (Por Unidad)",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel Con Cafeina 32 Grs x 12 Unid Ultratech (Por Caja Cerrada)",
        imagen_url: "placeholder.jpg",
        grupo: "Barras Proteicas / Bebidas Isotonicas"

    },
    {
        nombre: "Lipo Smash Athomx",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipo Extreme 30 Serv (Polvo) Body Advance",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "L-carnitina Liquida 500 Ml Gentech Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "L-carnitina 90 Caps Gentech Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "TX3 Black cuts 60 Caps Gentech Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipo Gold Elite 60 Caps Gold Nutrition Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Thermo Fuel MAX x 120 Caps Star Nutrition Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Cla 1000 Acido Linoleico Star Nutrition Sin Tacc",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "L Carnitina Tartrato 60 caps HTN Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "X6 Thermo Fire 120 Caps HTN Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipo 6 Black 60 Caps Nutrex Research",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Hell Fire x 90 Tabs Innovative Labs",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Hydroxycut Hardcore Elite 110 Tabs Muscletech Nueva Presentacion!!!",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "EPH 25 90 Tabs Kn Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "EPH 50 90 Tabs Kn Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "EPH 100 60 Tabs Kn Nutrition",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene 25 Mg 90 Tabletas Hi Tech Pharma",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene elite 90 Tabletas Hi Tech Pharma",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene Xtreme 90 Tabletas Hi Tech Pharma",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene Hardcore 90 Tabletas Hi Tech Pharma",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Eca Xtreme 90 Tabs NICWL",
        imagen_url: "placeholder.jpg",
        grupo: "Quemadores / Fat Burners"
    },

    // productos de Oxido Nitritco
    { nombre: "No Gold 195 Grs / 25 Serv Raspberry Gold Nutrition Sin Tacc", imagen_url: "No Gold 195 Grs 25 Serv Raspberry Gold Nutrition Sin Tacc.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Nitrix Bomb Oxido Nitrico 90 Tabs Body Advance", imagen_url: "Nitrix Bomb Oxido Nitrico 90 Tabs Body Advance.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Arginox Nitric Oxide 240 Comp Nutrilab", imagen_url: "Arginox Nitric Oxide 240 Comp Nutrilab.jpg", grupo: "Oxido Nitritco" },
    { nombre: "STEAM N.O. 20 Serv Star Nutrition Sin Tacc", imagen_url: "STEAM N.O. 20 Serv Star Nutrition Sin Tacc.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Muscle Max 90 Tabs Ena Post Work", imagen_url: "Muscle Max 90 Tabs Ena Post Work.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Nitro M Extreme x 225 g. / 30 Serv HTN", imagen_url: "Nitro M Extreme x 225 g. 30 Serv HTN.jpg", grupo: "Oxido Nitritco" }
];

const buscador = document.getElementById('buscador');
const listaProductos = document.getElementById('lista-productos');
const imagenProducto = document.getElementById('imagen-producto');
const nombreProductoSeleccionado = document.getElementById('nombre-producto-seleccionado');

// Crear elemento de sugerencias del buscador
const sugerencias = document.createElement('div');
sugerencias.id = 'sugerencias-buscador';
buscador.parentNode.insertBefore(sugerencias, buscador.nextSibling);

// Crear botón X para limpiar el buscador
const limpiarBuscador = document.createElement('span');
limpiarBuscador.textContent = '✕';
limpiarBuscador.className = 'limpiar-buscador';
limpiarBuscador.setAttribute('aria-label', 'Limpiar');

// Contenedor para el input y la X
const buscadorWrapper = document.createElement('div');
buscadorWrapper.className = 'buscador-wrapper';
buscador.parentNode.insertBefore(buscadorWrapper, buscador);
buscadorWrapper.appendChild(buscador);
buscadorWrapper.appendChild(limpiarBuscador);

buscador.style.paddingRight = '32px';

// Obtener referencia al contenedor de grupos
const contenedorGrupos = document.getElementById('contenedor-grupos');

let grupoSeleccionado = null;

function renderBotonesGrupos() {
    contenedorGrupos.innerHTML = '';
    grupos.forEach(grupo => {
        const btn = document.createElement('button');
        btn.textContent = grupo;
        btn.className = `btn-grupo ${grupoSeleccionado === grupo ? 'activo' : ''}`;
        btn.addEventListener('click', () => {
            grupoSeleccionado = grupo;
            renderBotonesGrupos();
            mostrarProductos(productos.filter(p => p.grupo === grupo));
        });
        contenedorGrupos.appendChild(btn);
    });
}

// 1. FUNCIÓN PARA DIBUJAR LA LISTA
function mostrarProductos(lista) {
    listaProductos.innerHTML = '';
    if (lista.length === 0) {
        listaProductos.innerHTML = '<div style="padding:10px;">No hay productos en este grupo.</div>';
    } else {
        lista.forEach(producto => {
            const item = document.createElement('a');
            item.href = "#";
            item.textContent = producto.nombre;
            item.classList.add('item-producto');
            item.addEventListener('click', (e) => {
                e.preventDefault();
                seleccionarProducto(producto, item);
            });
            listaProductos.appendChild(item);
        });
    }
    
    if (!grupoSeleccionado && lista.length === productos.length) {
        listaProductos.innerHTML = '<div class="mensaje-estado"><span>Lista de Productos</span><span class="mensaje-estado-subtitulo">Seleccioná un grupo</span></div>';
    }
    
    nombreProductoSeleccionado.textContent = 'Seleccioná un producto';
    imagenProducto.style.display = 'none';
}

// 2. FUNCIÓN PARA EL BUSCADOR
buscador.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    limpiarBuscador.style.display = buscador.value.length > 0 ? 'block' : 'none';

    if (terminoBusqueda) {
        grupoSeleccionado = null;
        renderBotonesGrupos();
    }

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );

    mostrarProductos(resultados);
    
    // Sugerencias si hay al menos 3 letras
    if (terminoBusqueda.length >= 3) {
        const sugeridos = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(terminoBusqueda)
        ).map(p => p.nombre).slice(0, 10);
        
        sugerencias.innerHTML = '';
        sugeridos.forEach(nombre => {
            const opcion = document.createElement('div');
            opcion.textContent = nombre;
            opcion.addEventListener('mousedown', () => {
                buscador.value = nombre;
                sugerencias.style.display = 'none';
                mostrarProductos(productos.filter(p => p.nombre === nombre));
            });
            sugerencias.appendChild(opcion);
        });
        sugerencias.style.display = sugeridos.length ? 'block' : 'none';
        
        // Posiciona el cuadro debajo del input
        const rect = buscador.getBoundingClientRect();
        sugerencias.style.left = rect.left + 'px';
        sugerencias.style.top = rect.bottom + window.scrollY + 'px';
        sugerencias.style.width = rect.width + 'px';
    } else {
        sugerencias.style.display = 'none';
    }
});

limpiarBuscador.addEventListener('mousedown', (e) => {
    e.preventDefault();
    buscador.value = '';
    limpiarBuscador.style.display = 'none';
    sugerencias.style.display = 'none';
    grupoSeleccionado = null;
    renderBotonesGrupos();
    mostrarProductos(productos);
});

document.addEventListener('click', (e) => {
    if (e.target !== buscador) {
        sugerencias.style.display = 'none';
    }
});

// 3. FUNCIÓN PARA MOSTRAR LA IMAGEN AL SELECCIONAR
function seleccionarProducto(producto, elemento) {
    nombreProductoSeleccionado.textContent = producto.nombre;
    const mensajeSinImagen = document.getElementById('mensaje-sin-imagen');
    
    // Verificar si el producto tiene imagen placeholder
    if (producto.imagen_url === 'placeholder.jpg') {
        imagenProducto.style.display = 'none';
        mensajeSinImagen.style.display = 'block';
    } else {
        imagenProducto.src = `imagenes/${producto.imagen_url}`;
        imagenProducto.alt = `Imagen de ${producto.nombre}`;
        imagenProducto.style.display = 'block';
        mensajeSinImagen.style.display = 'none';
        
        // Manejar error de carga de imagen
        imagenProducto.onerror = function() {
            imagenProducto.style.display = 'none';
            mensajeSinImagen.style.display = 'block';
            this.onerror = null; // Evitar loop infinito
        };
    }

    // Desmarcar el producto previamente seleccionado
    document.querySelectorAll('.item-producto.seleccionado').forEach(el => el.classList.remove('seleccionado'));

    // Marcar el nuevo producto seleccionado
    if (elemento) elemento.classList.add('seleccionado');
}

// Zoom interactivo con movimiento de imagen
imagenProducto.addEventListener('mousemove', function(e) {
    if (this.style.display === 'none') return;
    
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    this.style.transformOrigin = `${x}% ${y}%`;
});

imagenProducto.addEventListener('mouseleave', function() {
    this.style.transformOrigin = 'center center';
});

// Inicialización: mostrar botones de grupos y productos
renderBotonesGrupos();
mostrarProductos(productos);
