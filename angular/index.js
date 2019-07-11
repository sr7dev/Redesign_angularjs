app.controller("mainController", function($scope,$http){

  var langList = {
    en:{
      slogan: "Affordable and Fast Software Development",
      subtitle: "We build whatever you want at an attractive price!",
      work: "Work",
      work_presentation:"Here's some of our work that we have done along the way",

      presentation:{
        design:"Design",
        design_desc:"Designing the best product possible is difficult, that's why we have chosen and master this field for a long time",
        develop:"Development",
        develop_desc:"Development is a process that takes at least half a year to over one full year, we do it for 1 to 3 months",
        launch:"Launch",
        launch_desc:"Dealing with the distribution platforms is difficult. Instead our specialised team takes care of everything for you. "
      },

      func_facts:{
        func_facts:"Fun Facts",
        finished_projects:"Finished projects",
        line_codes:"Lines of code",
        cup_coffees:"Cup of coffees",
        happy_clients:"Happy clients"
      },

      services:{
        services:"Services",
        website: "Website",
        website_desc:"We build platforms such as landing pages, web applications, dashboards & other platforms that can easily adapt to multiple devices.",
        smartphone:"Smartphone",
        smartphone_desc:"We build apps for mainstream platforms such as Android and iOS with the best optimization possible in order for them to work seamlessly for your users.",
        tablet:"Tablet",
        tablet_desc:"We can adapt Android and iOS apps for bigger screens but also build custom apps especially just for tablets",
        cloud:"Cloud Computing",
        cloud_desc:"We build smart cloud systems using the latest technologies. You can get APIs, SaaS, Encryption & more systems"
      },

      contact:{
        get_in_touch:"GET IN TOUCH",
        contact_slogan:"Tell us your needs and get an accurate cost and time estimation.",
        contact_info:"Contact Info",
        contact_form:"Contact Form",
        send_msg:"SEND MESSAGE"
      },
      navbar:{
        home:"Home",
        work:"Work",
        services:"Services",
        contact:"Contact"
      },
      portfolio:{
        smartNav:"Smart Navigation Systems",
        smartNav_desc:"An app for picking up orders from local stores and deliver them to their respective addresses",
        ecommerce:"E-Commerce Platforms",
        ecommerce_desc:"An app and web platform for people to order food, grocery and any product online",
        multinational:"Multinational Reach",
        multinational_desc:"An app for room service adapted in most of the world's languages",
        adminPanel:"Multicontrol dashboard",
        adminPanel_desc:"A dashboard Web platform that analyzes business's performance data and its clients from anywhere in the world.",
        smartCamera:"Artificial Intelligence ",
        smartCamera_desc:"An appl that stores expenses by scanning and extracting the text from the receipts using the camera."

      }

    },

    fr:{
      slogan: "Développement logiciel abordable et rapide",
      subtitle: "Nous développons tout ce dont vous avez besoin à un prix attractif!",
      work: "Portefeuille",
      work_presentation:"Voici quelques-uns de nos travaux que nous avons effectués en cours de route",

      presentation:{
        design:"Design",
        design_desc:"Concevoir le meilleur produit possible est difficile, c'est pourquoi nous l'avons choisi et maîtrisé cet domaine depuis longtemps",
        develop:"Développement",
        develop_desc:"Le développement est un processus qui prend au moins une demi-année à plus d'une année complète. Nous le faisons pendant 1 à 3 mois.",
        launch:"Lancement",
        launch_desc:"C'est difficile de traiter les plates-formes de distribution. C'est pourquoi notre équipe spécialisée va s'occupper de tout ça pour vous."
      },

      func_facts:{
        func_facts:"Faits Amusants",
        finished_projects:"Projets finis",
        line_codes:"Ligne de codes",
        cup_coffees:"Tasse de café",
        happy_clients:"Clients heureux"
      },

      services:{
        services:"Prestations de Service",
        website: "Site Web",
        website_desc:"Nous construisons des plates-formes telles que des pages de renvoi, des applications Web, des panneaux d'administration, etc., pouvant facilement s'adapter à plusieurs écrans et périphériques.",
        smartphone:"Smartphone",
        smartphone_desc:"Nous développons des applications pour les plates-formes grand public telles qu'Android et iOS avec la meilleure optimisation possible afin qu'elles puissent fonctionner de manière transparente pour vos utilisateurs.",
        tablet:"Tablette",
        tablet_desc:"Nous pouvons adapter les applications Android et iOS pour les écrans plus grands, mais également créer des applications personnalisées spécialement pour les tablettes",
        cloud:"Cloud Computing",
        cloud_desc:"Nous construisons des systèmes de cloud intelligents utilisant les dernières technologies. Vous pouvez obtenir des API, SaaS, chiffrement et autres systèmes"
      },

      contact:{
        get_in_touch:"Entrer en Contact",
        contact_slogan:"Dites-nous vos besoins et obtenez l'estimation parfaite maintenant",
        contact_info:"Informations de contact",
        contact_form:"Formulaire de contact",
        send_msg:"ENVOYER LE MESSAGE"
      },
      navbar:{
        home:"Accueil",
        work:"Portefeuille",
        services:"Services",
        contact:"Contact"
      },
      portfolio:{
        smartNav:"Systèmes de navigation intelligents",
        smartNav_desc:"Une application pour prendre les commandes des magasins locaux et les livrer à leurs adresses respectives",
        ecommerce:"Plateformes de commerce électronique",
        ecommerce_desc:"Une application et une plateforme Web permettant aux utilisateurs de commander en ligne des produits alimentaires, des produits d'épicerie et tout autre produit",
        multinational:"Portée multinationale",
        multinational_desc:"Une application pour le service de chambre adaptée dans la plupart des langues du monde",
        adminPanel:"Tableau de bord multicontrôle",
        adminPanel_desc:"Une plateforme Web qui permet d'analyser les données de performance d'entreprise et les clients de n'importe où dans le monde.",
        smartCamera:"Intelligence Artificielle",
        smartCamera_desc:"Une application qui stocke les dépenses en scannant et en extrayant le texte depuis les reçus en utilisant la caméra."
      }

    }
  }
  var cpLang = 'fr';
  $scope.selected_lng = langList[cpLang];

      $scope.update = function(lang){
        $scope.selected_lng = langList[lang];
      }

      var availableLang = {
        en: "English",
        fr: "Français"
      };
      $scope.availableLang = availableLang;


      $scope.sendMessage = function(msgName,msgEmail,msgPhone,msgMessage){

$http.post('sendEmail.php?send=true',
        {name: msgName,
         email: msgEmail,
         phone: msgPhone,
         message: msgMessage
       }).then(function(datas){
         alert("Success!");
       })



      }

})
