// SIMULACIÓN DE TUS DATOS (¡A COMPLETAR!)
const grupos = [
    "Shakers", "Proteinas", "Creatinas", "Linea Anti Age", "Pro Hormonales", "PreWorks / Pre Entrenos", "Materias Primas", "Aminoacidos / Bcaas", "Ganadores de Peso / Gainers", "Barras Proteicas / Bebidas Isotonicas", "Quemadores / Fat Burners", "Oxido Nitritco", "Alimentos Funcionales", "Multivitaminicos"
];

const productos = [
    // productos de Shakers
    { nombre: "Shaker Black Gold Nutrition Simple 600 Ml", imagen_url: "Shaker Black Gold Nutrition Simple 600 Ml.jpg", grupo: "Shakers" },
    { nombre: "shaker 2 en 1 Gold Nutrition 600 Ml", imagen_url: "shaker 2 en 1 Gold Nutrition 600 Ml.jpg", grupo: "Shakers" },
    { nombre: "Shaker Pro One Tapa negra/blanca Gold Nutrition", imagen_url: "Shaker Pro One Tapa negra blanca Gold Nutrition.jpg", grupo: "Shakers" },
    { nombre: "Shaker Black Simple 600 Ml HTN", imagen_url: "Shaker Black Simple 600 Ml HTN.jpg", grupo: "Shakers" },
    { nombre: "***shaker 2 en 1 Con Compartimiento 600 Ml HTN", imagen_url: "shaker 2 en 1 Con Compartimiento 600 Ml HTN", grupo: "Shakers" },
    { nombre: "Shaker Flip 2 En 1 Con Compartimiento y Cuchara Dosificadora", imagen_url: "Shaker Flip 2 En 1 Con Compartimiento y Cuchara Dosificadora.jpg", grupo: "Shakers" },
    { nombre: "***Shaker Blender Botless 400 / 600 Ml Star Nutrition", imagen_url: "Shaker Blender Botless 400 / 600 Ml Star Nutrition", grupo: "Shakers" },
    { nombre: "Shaker GOT PROTEIN BLENDER 400 Ml BSN O OPTIMUM NUTRITION", imagen_url: "Shaker GOT PROTEIN BLENDER 400 Ml BSN O OPTIMUM NUTRITION.jpg", grupo: "Shakers" },
    { nombre: "Shaker GOT PROTEIN BLENDER 600 Ml BSN O OPTIMUM NUTRITION", imagen_url: "Shaker GOT PROTEIN BLENDER 600 Ml BSN O OPTIMUM NUTRITION.jpg", grupo: "Shakers" },
    { nombre: "Shaker Gentech 3 en 1 COLOR ROSA", imagen_url: "Shaker Gentech 3 en 1 COLOR ROSA.jpg", grupo: "Shakers" },
    { nombre: "Shaker Gentech 3 en 1 COLOR AZUL", imagen_url: "Shaker Gentech 3 en 1 COLOR AZUL.jpg", grupo: "Shakers" },

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
    { nombre: "*Nitrotech Whey Protein 2.2 Lbs MUSCLETECH", imagen_url: "Nitrotech Whey Protein 2.2 Lbs MUSCLETECH.jpg", grupo: "Proteinas" },
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

    // productos de Linea Anti Age
    { nombre: "Collagen Hidrolized + Ac Hialuronico + Vita C + Q10 Pomelo 20 Serv Age Biologique Sin Tacc", imagen_url: "Collagen Hidrolized + Ac Hialuronico + Vita C + Q10 Pomelo 20 Serv Age Biologique Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Collagen Hidrolized + Ac Hialuronico + Vita C + T Blanco Frutilla 20 Serv Age Biologique Sin Tacc", imagen_url: "Collagen Hidrolized + Ac Hialuronico + Vita C + T Blanco Frutilla 20 Serv Age Biologique Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Collagen Hidrolized + Ac Hialuronico + Vita C 60 Tabs / 30 Serv Age Biologique Sin Tacc", imagen_url: "Collagen Hidrolized + Ac Hialuronico + Vita C 60 Tabs 30 Serv Age Biologique Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "HAIR COMPLEX - SKIN & NAILS 60 Caps / 30 Serv Age Biologique Sin Tacc", imagen_url: "HAIR COMPLEX - SKIN & NAILS 60 Caps 30 Serv Age Biologique Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado Acido Hialuronico + Q10 + Resveratrol 210gr Star Nutrition Sin Tacc", imagen_url: "Colageno Hidrolizado Acido Hialuronico + Q10 + Resveratrol 210gr Star Nutrition Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Collagen Plus con Vitamina C + Magnesio 30 Serv Star Nutrition Sin Tacc", imagen_url: "Collagen Plus con Vitamina C + Magnesio 30 Serv Star Nutrition Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Collagen Sport con Vitamina C + Magnesio + Cafeina 30 Serv Star Nutrition Sin Tacc", imagen_url: "Collagen Sport con Vitamina C + Magnesio + Cafeina 30 Serv Star Nutrition Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado 300 Grs 30 Servicios OVOFULL", imagen_url: "Colageno Hidrolizado 300 Grs 30 Servicios OVOFULL.jpg", grupo: "Linea Anti Age" },
    { nombre: "FLEXO DRINK Acido Hialuronico + Glucosamina 20 Serv Nutremax Sin Tacc", imagen_url: "FLEXO DRINK Acido Hialuronico + Glucosamina 20 Serv Nutremax Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colágeno Beauty Drink Con Antioxidante Minerales 30 Serv Nutremax Sin Tacc", imagen_url: "Colágeno Beauty Drink Con Antioxidante Minerales 30 Serv Nutremax Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colágeno + Resveratrol + Q10 + Vitamina C Caja 30 Sobres Gentech Sin Tacc", imagen_url: "Colágeno + Resveratrol + Q10 + Vitamina C Caja 30 Sobres Gentech Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Peptax Colágeno + Vitamina C + Magnesio 60 Serv Naranja Athomx", imagen_url: "Peptax Colágeno + Vitamina C + Magnesio 60 Serv Naranja Athomx.jpg", grupo: "Linea Anti Age" },
    { nombre: "Peptax Q10 Colágeno Hidrolizado + Q10 60 Serv Limón Athomx", imagen_url: "Peptax Q10 Colágeno Hidrolizado + Q10 60 Serv Limón Athomx.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Flex & Go 30 Serv EDN", imagen_url: "Colageno Flex & Go 30 Serv EDN.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Boost 30 Serv EDN", imagen_url: "Colageno Boost 30 Serv EDN.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Young 30 Serv EDN", imagen_url: "Colageno Young 30 Serv EDN.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Purity 30 Serv EDN", imagen_url: "Colageno Purity 30 Serv EDN.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Sport 30 Serv EDN", imagen_url: "Colageno Sport 30 Serv EDN.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado 300 Grs Body Advance", imagen_url: "Colageno Hidrolizado 300 Grs Body Advance.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado 20 Serv Pulver (Cero Sodio) Sin Tacc", imagen_url: "Colageno Hidrolizado 20 Serv Pulver Cero Sodio Sin Tacc.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado Acido Hialuronico 20 Serv Generation Fit", imagen_url: "Colageno Hidrolizado Acido Hialuronico 20 Serv Generation Fit.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado + Vitamina C 1Kg Neix", imagen_url: "Colageno Hidrolizado + Vitamina C 1Kg Neix.jpg", grupo: "Linea Anti Age" },
    { nombre: "Colageno Hidrolizado 600 Grs My Protein Myvitamin", imagen_url: "Colageno Hidrolizado 600 Grs My Protein Myvitamin.jpg", grupo: "Linea Anti Age" },

    // productos de Pro Hormonales
    { nombre: "ZMA 60 Tabs Gold Nutriton Sin Tacc", imagen_url: "ZMA 60 Tabs Gold Nutriton Sin Tacc.jpg", grupo: "Pro Hormonales" },
    { nombre: "HMB 60 Tabs Gold Nutrition Sin Tacc", imagen_url: "HMB 60 Tabs Gold Nutrition Sin Tacc.jpg", grupo: "Pro Hormonales" },
    { nombre: "Testo Gold 120 Caps Gold Nutrition Sin Tacc", imagen_url: "Testo Gold 120 Caps Gold Nutrition Sin Tacc.jpg", grupo: "Pro Hormonales" },
    { nombre: "ZMA 90 caps Star Nutrition Sin Tacc", imagen_url: "ZMA 90 caps Star Nutrition Sin Tacc.jpg", grupo: "Pro Hormonales" },
    { nombre: "HMB 180 caps Star Nutrition Sin Tacc", imagen_url: "HMB 180 caps Star Nutrition Sin Tacc.jpg", grupo: "Pro Hormonales" },
    { nombre: "ZMA 45 Serv Body Advance", imagen_url: "ZMA 45 Serv Body Advance.jpg", grupo: "Pro Hormonales" },
    { nombre: "Testo Prmx 30 Serv Body Advance", imagen_url: "Testo Prmx 30 Serv Body Advance.jpg", grupo: "Pro Hormonales" },
    { nombre: "Testo Gen (Pro Hormonal) 30 Serv Generation Fit", imagen_url: "Testo Gen (Pro Hormonal) 30 Serv Generation Fit.jpg", grupo: "Pro Hormonales" },
    { nombre: "Zma Recovery 60 Caps Gentech Sin Tacc", imagen_url: "Zma Recovery 60 Caps Gentech Sin Tacc.jpg", grupo: "Pro Hormonales" },
    { nombre: "Complex Testo Booster Testo + Zma 150 Serv Athomx", imagen_url: "Complex Testo Booster Testo + Zma 150 Serv Athomx.jpg", grupo: "Pro Hormonales" },
    { nombre: "Dhea 25 mg 60 Tabs Kn Nutrition", imagen_url: "Dhea 25 mg 60 Tabs Kn Nutrition.jpg", grupo: "Pro Hormonales" },
    { nombre: "Dhea 50 mg 60 Tabs Kn Nutrition", imagen_url: "Dhea 50 mg 60 Tabs Kn Nutrition.jpg", grupo: "Pro Hormonales" },
    { nombre: "Dhea 100 mg 60 Tabs Kn Nutrition", imagen_url: "Dhea 100 mg 60 Tabs Kn Nutrition.jpg", grupo: "Pro Hormonales" },
    { nombre: "Tribulus 1000 60 Tabs Kn Nutrition", imagen_url: "Tribulus 1000 60 Tabs Kn Nutrition.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ligandrol 5 Mg 60 Caps Kn Nutrition", imagen_url: "Ligandrol 5 Mg 60 Caps Kn Nutrition.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ultra Sex 6 Tabletas Hyper Nutrition", imagen_url: "Ultra Sex 6 Tabletas Hyper Nutrition.jpg", grupo: "Pro Hormonales" },
    { nombre: "Li Chang 4 Tabs ArgenFarma", imagen_url: "Li Chang 4 Tabs ArgenFarma.jpg", grupo: "Pro Hormonales" },
    { nombre: "Li Chang 8 Tabs ArgenFarma", imagen_url: "Li Chang 8 Tabs ArgenFarma.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ultra Hombre Estimulante Sexual (1 Blister) Web Supplements", imagen_url: "Ultra Hombre Estimulante Sexual (1 Blister) Web Supplements.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ultra Hombre Estimulante Sexual 12 Caps Web Supplements", imagen_url: "Ultra Hombre Estimulante Sexual 12 Caps Web Supplements.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ultra Mujer 4 Capsulas Web Supplements", imagen_url: "Ultra Mujer 4 Capsulas Web Supplements.jpg", grupo: "Pro Hormonales" },
    { nombre: "Lifem 8 Tabs (Estimulante Femenino) ArgenFarma", imagen_url: "Lifem 8 Tabs (Estimulante Femenino) ArgenFarma.jpg", grupo: "Pro Hormonales" },
    { nombre: "Cardarine Gw-501516 10 Mg 60 Caps Ut Lab", imagen_url: "Cardarine Gw-501516 10 Mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ostarine MK-2866 10 Mg 60 Caps Ut Lab", imagen_url: "Ostarine MK-2866 10 Mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ligandrol LDG-4033 5 Mg 60 Caps Ut Lab", imagen_url: "Ligandrol LDG-4033 5 Mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "Testolone RAD-140 10 Mg 60 Caps Ut Lab", imagen_url: "Testolone RAD-140 10 Mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "Stenabolic SR-9009 10 Mg 60 Caps Ut Lab", imagen_url: "Stenabolic SR-9009 10 Mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "Andarine S-4 25 Mg 60 Caps Ut Lab", imagen_url: "Andarine S-4 25 Mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "Ibutamoren MK-677 12,5 mg 60 Caps Ut Lab", imagen_url: "Ibutamoren MK-677 12,5 mg 60 Caps Ut Lab.jpg", grupo: "Pro Hormonales" },
    { nombre: "YK-11 5mg 60 Caps Dragon Elite", imagen_url: "YK-11 5mg 60 Caps Dragon Elite.jpg", grupo: "Pro Hormonales" },
    { nombre: "Testrol Gold ES 60 Tabletas GAT Sport", imagen_url: "Testrol Gold ES 60 Tabletas GAT Sport.jpg", grupo: "Pro Hormonales" },
    { nombre: "Testrol Original 60 Tabletas GAT Sport", imagen_url: "Testrol Original 60 Tabletas GAT Sport.jpg", grupo: "Pro Hormonales" },
    { nombre: "Anabol Hadcore 60 Capsulas Liquidas Nutrex", imagen_url: "Anabol Hadcore 60 Capsulas Liquidas Nutrex.jpg", grupo: "Pro Hormonales" },
    { nombre: "Liv 52 DS 60 Tabletas Himalaya", imagen_url: "Liv 52 DS 60 Tabletas Himalaya.jpg", grupo: "Pro Hormonales" },

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

    // productos de Materias Primas
    { nombre: "Proteina de Suero 80% Concentrada Nacional 1Kg Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Proteina de Soja 90 % Isolada 1Kg Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Proteina De Arveja 85% Concentrada Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Albumina Deshidratada 1Kg (270 CLARAS) Ovofull", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Albumina Hidrolizada 750Grs(205 CLARAS) Ovofull", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Albumina Deshidratada 370 Grs = 100 Claras Ovofull", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Huevo entero en polvo 1 Kg (80 Huevos) Ovofull", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Taurina 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Taurina 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Arginina 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Arginina 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Glutamina 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Glutamina 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C 250Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C 1 Kg EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C 2 Kg EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado 1 Kg EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado 1 Kg + Cloruro Magnesio 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio 1 Kg EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Colageno tipo 2 UCII No Desnaturalizado 60 Caps Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado Puro En Polvo 500 Grs Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Colageno Hidrolizado Puro En Polvo 1 Kg Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio Israel 500 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Cloruro de magnesio Israel 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 500 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Potasio 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Potasio 500 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Potasio 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Creatina monohidrato pura 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Creatina monohidrato pura 500 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Creatina monohidrato pura 1 kG NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Bicarbonato de sodio uso culinario 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Bicarbonato de sodio Grado Alimentario 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Glucosamina 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascobico 60 Caps Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 100 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 500 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Vitamina C Acido Ascorbico 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Arginina 250 grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Arginina 500 grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrulina Malato 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrulina Malato 500 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Citrulina 250 grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "L Citrulina 500 grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 250 grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Beta Alanina 500 grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Taurina 100 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Taurina 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Cistina 100 Grs NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Carbonato de Magnesio Liviano 250 Grs Pureza 99,9% NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Carbonato de Magnesio Liviano 500 Grs Pureza 99,9% NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Carbonato de Magnesio Liviano 1 Kg Pureza 99,9% NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Sulfato de Magnesio (Sales de Epsom) 1 Kg NATURAL WHEY", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Glutation Reduced Form USP 10 Grs Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Glicinato de Magnesio USP 250 Grs Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Bisglicinato de Magnesio USP 250 Grs Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Bisglicinato de Magnesio USP 500 Grs Natural Whey", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 1 Kg EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de potasio 250 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de potasio 500 Grs EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de potasio 1 Kg EDN", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "PROSALTS Cápsulas de electrolitos 60 Caps Nutremax Sin Tacc", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 150 Grs On Fit Nutrition", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de magnesio 450 Grs On Fit Nutrition", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 260 Grs Generation Fit", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 60 Caps Vegetales Gold Nutrition Sin Tacc", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 60 Caps Star Nutrition Sin Tacc", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato de Magnesio 500 Grs Star Nutrition Sin Tacc (Natural O Frutos del Bosque)", imagen_url: "", grupo: "Materias Primas" },
    { nombre: "Citrato De Magnesio 60 Cápsulas Ena Sport", imagen_url: "", grupo: "Materias Primas" },

    // productos de Aminoacidos / Bcaas
    { nombre: "100% Glutamina micronizada 300 Grs New Protein", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Lisina Clorohidrato 100 Grs NATURAL WHEY", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Lisina Clorohidrato 250 Grs NATURAL WHEY", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "GlutaAx  Glutamina 300 Grs Durazno Athomx", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA AMINO 8.1.1 20 serv / 280 Grs Body Advance", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina 300 grs Body Advance", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Eaas Amino 9 aminoacidos Esenciales 300 Grs / 20 Serv Body Advance", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Mtor Bcaa Evolution 290Grs / 20 Serv Star Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "EAA´S Essential Amino 20 Serv Star Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina x 150Grs Star Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina x 300Grs Star Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA 2000 120 Tabs Star Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA 2000 120 Tabs Gold Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Gold 280 grs / 20 Serv Grape Fruit Gold Nutriton Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Essential 30 Serv Gold Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L-GLUTAMINE MICRONIZED 225 Grs Gold Nutriton Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L-GLUTAMINA 100% x 150 Grs Pulver Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Arginina 150 Grs / 30 serv Pulver Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Bcaa 211 150 Grs / 30 Serv Pomelo Pulver Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Bcaa 211 120 Caps / 30 Serv Pulver Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Citrato De Magnesio 300 grs / 100 Serv Pulver Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Beta Alanina 60 Tabs ENA Sport", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L Glutamina Micronizada 150grs Htn", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L Glutamina Micronizada 300grs Htn", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "β-BCAA 8.0 (+ Enzyme) 30 Serv HTN Nutrition Apto vegano y Diabetico", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Hydro Bcaa Pro 4:1:1 360 Gr Xtrenght Nutrition Sin Tacc", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina 300 Grs Kn Nutrition", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino X 30 Serv BSN", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino X 70 Serv BSN", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Energy 30 Serv Optimum Nutrition", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA Tropical V2 250g My Protein Myvitamin", imagen_url: "", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA + EAA 30 Sev Ryse Nutrition", imagen_url: "", grupo: "Aminoacidos / Bcaas" },

    // productos de Ganadores de Peso / Gainers
    { nombre: "Muscle Mass Gainer Gold 5 Lbs Gold Nutrition Sin Tacc (vainilla / chocolate)", imagen_url: "Muscle Mass Gainer Gold 5 Lbs Gold Nutrition Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Mutant Mass x 1,5 Kilos Star Nutrition Sin Tacc", imagen_url: "Mutant Mass x 1,5 Kilos Star Nutrition Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Mass Generator 1,5 Kg Athmox", imagen_url: "Mass Generator 1,5 Kg Athmox.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Plus Gainer  1,5 Kg Pulver Sin Tacc", imagen_url: "Plus Gainer  1,5 Kg Pulver Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },

    // productos de Barras Proteicas / Bebidas Isotonicas
    {
        nombre: "Alfajor Proteico 60 Grs Day By Day (Por unidad)", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Alfajor Proteico 60 Grs Day By Day (Por caja 12 unid)", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Bar Protein Barra 46Grs Gentech (Por unidad) Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Low Carb Barra 45Grs Gentech (Por unidad) Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Veggie Bar 45Grs Gentech (Por Unid) Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Mervick 65 Grs (Por Unidad)", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Low Carb Mervick 46 Grs (Por Unidad)", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "PULVER POWER Barra Proteica (Por unidad) Caja 12 Unid Pulver Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Prosnick Protein Bar 46 Grs (Por caja) Body Advance", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Proteicas Bigual 50 Grs (Original, Café, Cacao Amargo) BIGUAL SIN TACC", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Bar Protein Barra 46Grs Gentech (Por caja 20 unidades) Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Low Carb Barras 45Grs Gentech (Por Caja 10 Unid) Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Veggie Bar 45Grs Gentech (Por Caja 10 Unid) Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Mervick 65 Grs (12 Unid por caja)", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Barras Low Carb Mervick 46 Grs (12 Unid por caja)", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "PULVER POWER Barra Proteica (Chocolate - frutilla) Caja 12 Unid Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hydroplus Endurance 700 grs Rinde 10 lts Star Nutrition Sin Tacc", imagen_url: "", grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Gel BCAA 20 Grs x 6 Sobres Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Iron Gel Con Cafeina X 24u 20gr Unid Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel 12 Pouch x 40Grs Mervick",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Gel Carbotene 10 Pouches De 40gr Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hidratade 600 Grs Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hidratade 1Kg Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Hidratade 2Kg Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Power Drink 500 Grs (20 Sobres) Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "GO! Energy gel 10 x 30 Grs Atlhetica Nutrition",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "GO! Recovery Gel 10 x 30 Grs Atlhetica Nutrition",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Best Whey Bar 12 x 30 Grs Athletica Nutrition",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "HYDROMAX Sport Drink 600 Grs 9 Lts Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "HYDROMAX Sport Drink 1520 Grs 23 Lts Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "HYDROMAX Sport Drink 660 Grs (20 Sobres/10Lts) Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "RECOVERY Drink 540 Grs 4,5 Lts Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "RECOVERY Drink 1500 Grs 12,5 Lts Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "RECOVERY Drink 600 Grs (10 sobres/5Lts) Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel 12 Pouch x 33Grs Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Extreme Energy 20 Sobres 40 Grs C/U Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Extreme Energy 560 Grs Nutremax Sin Tacc",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel Con Cafeina 32 Grs x 12 Unid Ultratech (Por Unidad)",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },
    {
        nombre: "Energy Gel Con Cafeina 32 Grs x 12 Unid Ultratech (Por Caja Cerrada)",
        imagen_url: "",
        grupo: "Barras Proteicas / Bebidas Isotonicas"
    },

    // productos de Quemadores / Fat Burners
    {
        nombre: "Lipo Smash Athomx",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipo Extreme 30 Serv (Polvo) Body Advance",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "L-carnitina Liquida 500 Ml Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "L-carnitina 90 Caps Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "TX3 Black cuts 60 Caps Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipo Gold Elite 60 Caps Gold Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Thermo Fuel MAX x 120 Caps Star Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Cla 1000 Acido Linoleico Star Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "L Carnitina Tartrato 60 caps HTN Nutrition",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "X6 Thermo Fire 120 Caps HTN Nutrition",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipo 6 Black 60 Caps Nutrex Research",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Hell Fire x 90 Tabs Innovative Labs",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Hydroxycut Hardcore Elite 110 Tabs Muscletech Nueva Presentacion!!!",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "EPH 25 90 Tabs Kn Nutrition",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "EPH 50 90 Tabs Kn Nutrition",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "EPH 100 60 Tabs Kn Nutrition",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene 25 Mg 90 Tabletas Hi Tech Pharma",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene elite 90 Tabletas Hi Tech Pharma",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene Xtreme 90 Tabletas Hi Tech Pharma",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Lipodrene Hardcore 90 Tabletas Hi Tech Pharma",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },
    {
        nombre: "Eca Xtreme 90 Tabs NICWL",
        imagen_url: "",
        grupo: "Quemadores / Fat Burners"
    },

    // productos de Oxido Nitritco
    { nombre: "No Gold 195 Grs / 25 Serv Raspberry Gold Nutrition Sin Tacc", imagen_url: "No Gold 195 Grs 25 Serv Raspberry Gold Nutrition Sin Tacc.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Nitrix Bomb Oxido Nitrico 90 Tabs Body Advance", imagen_url: "Nitrix Bomb Oxido Nitrico 90 Tabs Body Advance.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Arginox Nitric Oxide 240 Comp Nutrilab", imagen_url: "Arginox Nitric Oxide 240 Comp Nutrilab.jpg", grupo: "Oxido Nitritco" },
    { nombre: "STEAM N.O. 20 Serv Star Nutrition Sin Tacc", imagen_url: "STEAM N.O. 20 Serv Star Nutrition Sin Tacc.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Muscle Max 90 Tabs Ena Post Work", imagen_url: "Muscle Max 90 Tabs Ena Post Work.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Nitro M Extreme x 225 g. / 30 Serv HTN", imagen_url: "Nitro M Extreme x 225 g. 30 Serv HTN.jpg", grupo: "Oxido Nitritco" },

    // productos de Alimentos Funcionales
    {
        nombre: "Espesante 300 Grs Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Protein Pancake 10 Sobres Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Mousse Proteico 600 Grs (20 sobres) Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Mousse Proteico 1 Kg Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Cream Soup 400 Grs Sopa Crema Proteica De Vegetales Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Cream Soup 1 K Sopa Crema Proteica De Vegetales Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Prolac Cappuccino 20 Serv Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Prolac Cappuccino 40 Serv Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Pancake (Vainilla o chocolate) 300 Grs 10 Porciones OVOFULL",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },
    {
        nombre: "Sopa Proteica (Verdura o Queso) 300 Grs Porciones OVOFULL",
        imagen_url: "",
        grupo: "Alimentos Funcionales"
    },

    // productos de Multivitaminicos
    {
        nombre: "B Complex 60 Tabs Gold Nutrition (complejo Vitaminas B) Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Omega 3 Fish Oil 30 Capsulas Blandas Gold Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "K2+D3 Vitaminas 30 Comp Gold Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Electrolitos Vitaminas Y Minerales Gold Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Resveratrol 500 x 60 Caps Star Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Omega3 60 Caps / 30 servicios Star Nutririon Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "All-In-One Multi Vitamin 60 Comp. Star Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vitamina C 60 Caps Star Nutrition Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Multivitaminico 60 Tabs Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Omega 3 EPA 60 Caps Gentech Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vitamin Pro - 60 DIAS 60 Tabs HTN Nutrition",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "4.0 Antioxidant -  60 DIAS 60 Tabs HTN Nutrition",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "V Mineral 60 Tab Body Advance",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vita Flex 60 Tabs Body Advance",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Niacina (Vitamina B3) 30 Mg 60 Tabs Body Advance",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vitamina C + D + Zinc 30 Serv Body Advance",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vitaminas y Minerales 60 Tab Pulver Sin Tacc",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Multivitamin 100 240 Comp Nutrilab",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vita Plus 250 90 tabletas Kn Nutrition",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Zeolita Micronizada Activada 250 Grs Natural Whey",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vitamina D3 10 Grs NATURAL WHEY",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Vitamina D3 20 Grs NATURAL WHEY",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "GABA 20 Grs NATURAL WHEY",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Daily Vitamins 60 Tabs My Protein Myvitamin",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Myvitamins Coconut and Collagen 60 Caps My Protein Myvitamin",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "NAD+ Resveratrol Complex x 60 cápsulas Vitatech",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Himalaya Liv 52 DS 60 Tabletas",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Optimen 150 Tabletas Optimum Nutrition",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Mens Multi+Test 60 Tabs GAT Sport",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },
    {
        nombre: "Shilajit 60 Caps Wins Town",
        imagen_url: "",
        grupo: "Multivitaminicos"
    },

    // ... ¡El resto de tus productos irán aquí!
];

const buscador = document.getElementById('buscador');
const listaProductos = document.getElementById('lista-productos');
const imagenProducto = document.getElementById('imagen-producto');
const nombreProductoSeleccionado = document.getElementById('nombre-producto-seleccionado');

const sugerencias = document.createElement('div');
sugerencias.id = 'sugerencias-buscador';
sugerencias.style.position = 'absolute';
sugerencias.style.background = '#fff';
sugerencias.style.border = '1px solid #ccc';
sugerencias.style.borderRadius = '8px';
sugerencias.style.boxShadow = '0 2px 8px rgba(54,69,79,0.10)';
sugerencias.style.zIndex = '10';
sugerencias.style.width = buscador.offsetWidth + 'px';
sugerencias.style.display = 'none';
sugerencias.style.maxHeight = '200px';
sugerencias.style.overflowY = 'auto';
buscador.parentNode.insertBefore(sugerencias, buscador.nextSibling);

// Crear botón X para limpiar el buscador
const limpiarBuscador = document.createElement('span');
limpiarBuscador.textContent = '✕';
limpiarBuscador.style.position = 'absolute';
limpiarBuscador.style.right = '10px';
limpiarBuscador.style.top = '50%';
limpiarBuscador.style.transform = 'translateY(-50%)';
limpiarBuscador.style.cursor = 'pointer';
limpiarBuscador.style.fontSize = '1em';
limpiarBuscador.style.color = '#556B2F';
limpiarBuscador.style.display = 'none';
limpiarBuscador.style.zIndex = '20';
limpiarBuscador.setAttribute('aria-label', 'Limpiar');

// Contenedor para el input y la X
const buscadorWrapper = document.createElement('div');
buscadorWrapper.style.position = 'relative';
buscadorWrapper.style.display = 'inline-block';
buscadorWrapper.style.width = '100%';
buscadorWrapper.style.maxWidth = '1600px';
buscador.parentNode.insertBefore(buscadorWrapper, buscador);
buscadorWrapper.appendChild(buscador);
buscadorWrapper.appendChild(limpiarBuscador);

buscador.style.width = '100%';
buscador.style.maxWidth = '1600px';
buscador.style.paddingRight = '32px'; // espacio para la X

// Crear contenedor para los botones de grupos
const contenedorGrupos = document.createElement('div');
contenedorGrupos.id = 'contenedor-grupos';
contenedorGrupos.style.display = 'block'; // Cambia de flex a block para columna
contenedorGrupos.style.maxHeight = '400px'; // Altura máxima para scroll interno
contenedorGrupos.style.overflowY = 'auto'; // Scroll vertical interno solo si es necesario
contenedorGrupos.style.flexWrap = null;
contenedorGrupos.style.gap = null;
contenedorGrupos.style.marginBottom = '18px';
contenedorGrupos.style.justifyContent = 'center';
// ESTILO TRASLÚCIDO IGUAL AL DE PRODUCTOS E IMÁGENES
contenedorGrupos.style.background = 'rgba(255,255,255,0.65)';
contenedorGrupos.style.borderRadius = '18px';
contenedorGrupos.style.boxShadow = '0 2px 16px rgba(54,69,79,0.10)';
contenedorGrupos.style.border = '1px solid #ccc';
contenedorGrupos.style.padding = '18px 12px';
contenedorGrupos.style.maxWidth = '1600px';
contenedorGrupos.style.margin = '0 auto 18px auto';
contenedorGrupos.style.width = '46%'; // Mantiene el ancho reducido del recuadro de grupos
contenedorGrupos.style.float = 'left';
contenedorGrupos.style.height = 'auto';
// Solo mostrar scroll si el contenido excede la altura máxima
contenedorGrupos.style.overflowY = 'auto';
contenedorGrupos.style.maxHeight = '400px';
listaProductos.parentNode.insertBefore(contenedorGrupos, listaProductos);

let grupoSeleccionado = null;

function renderBotonesGrupos() {
    contenedorGrupos.innerHTML = '';
    grupos.forEach(grupo => {
        const btn = document.createElement('button');
        btn.textContent = grupo;
        btn.className = 'btn-grupo';
        btn.style.display = 'block'; // Ocupa todo el ancho
        btn.style.width = '100%';
        btn.style.margin = '0 0 10px 0'; // Separación vertical
        btn.style.padding = '12px 18px';
        btn.style.borderRadius = '8px';
        btn.style.border = '1px solid #556B2F';
        btn.style.background = grupoSeleccionado === grupo ? '#556B2F' : '#fff';
        btn.style.color = grupoSeleccionado === grupo ? '#fff' : '#36454F';
        btn.style.fontWeight = grupoSeleccionado === grupo ? 'bold' : 'normal';
        btn.style.cursor = 'pointer';
        btn.style.boxShadow = grupoSeleccionado === grupo ? '0 2px 8px rgba(85,107,47,0.12)' : 'none';
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
        listaProductos.style.overflowY = 'auto';
        listaProductos.style.maxHeight = '400px';
    } else {
        lista.forEach(producto => {
            const item = document.createElement('a');
            item.href = "#";
            item.textContent = producto.nombre;
            item.classList.add('item-producto');
            item.addEventListener('click', () => seleccionarProducto(producto, item));
            listaProductos.appendChild(item);
        });
        listaProductos.style.overflowY = 'auto';
        listaProductos.style.maxHeight = '400px';
    }
    // Mensaje igual al formato de Detalle del Producto, centrado y con color verde institucional y márgenes superior/inferior
    if (!grupoSeleccionado) {
        listaProductos.innerHTML = '<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; font-size:1.3em; font-weight:bold; color:#556B2F;"><span>Lista del Productos</span><span id="mensaje-grupo" style="font-weight:normal; font-size:1.1em; color:#556B2F; margin-top:24px; letter-spacing:0.5px;">Seleccioná un grupo</span></div>';
        listaProductos.style.overflowY = 'hidden';
        listaProductos.style.maxHeight = 'none';
    }
    nombreProductoSeleccionado.textContent = 'Seleccioná un producto';
    imagenProducto.style.display = 'none';
}

listaProductos.style.maxHeight = '400px'; // Altura máxima para scroll interno
listaProductos.style.overflowY = 'auto'; // Scroll vertical interno solo si es necesario
listaProductos.style.width = '60%'; // Aumenta el ancho del recuadro de productos en un 40% (de 43% a 60%)
listaProductos.style.float = 'left';
listaProductos.style.height = 'auto';
// Solo mostrar scroll si el contenido excede la altura máxima
listaProductos.style.overflowY = 'auto';
listaProductos.style.maxHeight = '400px';

// 2. FUNCIÓN PARA EL BUSCADOR
buscador.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    limpiarBuscador.style.display = buscador.value.length > 0 ? 'block' : 'none';

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );

    mostrarProductos(resultados);
    // Sugerencias si hay al menos 3 letras
    if (terminoBusqueda.length >= 3) {
        const sugeridos = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(terminoBusqueda)
        ).map(p => p.nombre);
        sugerencias.innerHTML = '';
        sugeridos.forEach(nombre => {
            const opcion = document.createElement('div');
            opcion.textContent = nombre;
            opcion.style.padding = '8px 12px';
            opcion.style.cursor = 'pointer';
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
    mostrarIndiceGrupos();
});

document.addEventListener('click', (e) => {
    if (e.target !== buscador) {
        sugerencias.style.display = 'none';
    }
});

// 3. FUNCIÓN PARA MOSTRAR LA IMAGEN AL SELECCIONAR
function seleccionarProducto(producto, elemento) {
    nombreProductoSeleccionado.textContent = producto.nombre;
    imagenProducto.src = `imagenes/${producto.imagen_url}`;
    imagenProducto.alt = `Imagen de ${producto.nombre}`;
    imagenProducto.style.display = 'block'; // Mostrar la imagen

    // Desmarcar el producto previamente seleccionado
    document.querySelectorAll('.item-producto.seleccionado').forEach(el => el.classList.remove('seleccionado'));

    // Marcar el nuevo producto seleccionado
    if (elemento) elemento.classList.add('seleccionado');
}

// FUNCIÓN PARA MOSTRAR EL ÍNDICE DE GRUPOS
function mostrarIndiceGrupos() {
    listaProductos.innerHTML = '';
    grupos.forEach(grupo => {
        const grupoItem = document.createElement('div');
        grupoItem.textContent = grupo;
        grupoItem.classList.add('item-grupo');
        grupoItem.style.fontWeight = 'bold';
        grupoItem.style.cursor = 'pointer';
        grupoItem.style.padding = '10px 12px';
        grupoItem.style.borderBottom = '1px solid #ccc';
        grupoItem.addEventListener('click', () => {
            const productosGrupo = productos.filter(p => p.grupo === grupo);
            mostrarProductos(productosGrupo);
        });
        listaProductos.appendChild(grupoItem);
    });
    nombreProductoSeleccionado.textContent = 'Seleccioná un grupo';
    imagenProducto.style.display = 'none';
}

// FUNCIÓN PARA IGUALAR LA ALTURA DE LOS RECUADROS
function igualarAlturaRecuadros() {
    const visorImagen = document.getElementById('visor-imagen');
    const altura = visorImagen.offsetHeight;
    contenedorGrupos.style.height = altura + 'px';
    listaProductos.style.height = altura + 'px';
}
window.addEventListener('load', igualarAlturaRecuadros);
window.addEventListener('resize', igualarAlturaRecuadros);

// FUNCIÓN PARA IGUALAR LA ALTURA DEL RECUADRO DE PRODUCTOS
function igualarAlturaRecuadroProductos() {
    const visorImagen = document.getElementById('visor-imagen');
    const altura = visorImagen.offsetHeight;
    listaProductos.style.height = altura + 'px';
}
window.addEventListener('load', igualarAlturaRecuadroProductos);
window.addEventListener('resize', igualarAlturaRecuadroProductos);

// Al cargar la página, mostrar los botones de grupos y todos los productos
renderBotonesGrupos();
mostrarProductos(productos);