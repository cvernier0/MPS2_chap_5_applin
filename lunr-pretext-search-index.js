var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "al1-recap_chap5_app-lin-3",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-3.html",
  "type": "Section",
  "number": "1",
  "title": "— Testez vos réflexes",
  "body": " Testez vos réflexes   Sur l'image et le noyau    Soient deux espaces vectoriels, et soit une application linéaire.  Alors est injective si, et seulement si, est vide.     C'est faux ! Quelle que soit l'application linéaire , n'est jamais vide. En effet, on a toujours , donc .   contient au moins le vecteur nul, qui certes, n'est pas fascinant, mais existe quand même ! Pour le dire autrement,   Et ça n'empêche pas les applications linéaires de parfois être injectives: par exemple, l'application identité   est injective montrez-le ! , bien que .  Remarque: Par contre, pour que soit injective, il faut que le noyau de ne contienne que le vecteur nul, c'est-à-dire .      Soient un espace vectoriel, et soit une application linéaire.  Alors soit a un seul élément, soit est infini.     C'est vrai !  Pour le voir, prenons . Il y a deux cas:   Cas 1:  pour tout vecteur : dans ce cas,   donc a un seul élément.  Cas 2: il existe un vecteur tel que . Mais dans ce cas, pour n'importe quel réel ,   et comme , si , alors  pourquoi, au fait ? .  Donc contient les vecteurs , qui sont tous différents, donc est un ensemble infini.       Sur la composée d'applications linéaires    Soit un espace vectoriel et soit .  On suppose que .  Alors    Attention à la notation bizarre: quand est un endomorphisme, , (et non au carré, qui n'existe pas).  Autrement dit, ce qu'on suppose, c'est que pour tout , .   C'est faux !  L'implication   n'est pas forcément vérifiée.    Considérons par exemple l'endomorphisme de défini par   Alors, pour tout ,   donc , mais   donc  Remarque: Par contre, l'implication réciproque est vraie: si , alors on a, pour tout ,       Soit un espace vectoriel et soit , .  On suppose que .  Alors, et est la symétrie par rapport à parallèlement à .     C'est faux !  Dans ce cas, on a effectivement , mais est une projection , et non une symétrie. En effet, une symétrie est bijective, et donc on aurait . Mais alors, on aurait et , ce qui contredit nos hypothèses.  Vérifions que .   Soit . Alors puisque , et on a un tel que puisque . Mais du coup, comme ,   donc, , et on a montré que .   Soit , montrons que se décompose en avec et .. Remarquons que ; clairement, , et d'un autre côté, si on note , alors   donc . On peut donc prendre et et on a la décomposition souhaitée.   De là, si on prend , avec sa décomposition , alors comme on a vu, , et donc est la projection sur parallèlement à .    Quel est le noyau d'une symétrie ?      Soit un espace vectoriel et soit , .  On suppose que .  Alors, si on note , est la symétrie par rapport à parallèlement à .     C'est vrai !  Si , alors  , et tout vecteur de se décompose en , avec et (voir la question précédente).  De là, si on prend , avec sa décomposition , alors comme on a vu, , et donc : donc est effectivement la symétrie par rapport à parallèlement à .       Sur le lien entre dimension, injectivité et surjectivité    Soit une application linéaire.  Alors ne peut pas être surjective.     C'est vrai !  D'après le théorème du rang,   Or, donc   donc on ne peut pas avoir .  Donc n'est pas surjective.      Soit une application linéaire.  Alors ne peut pas être injective.     C'est vrai !  D'après le théorème du rang,   Et d'un autre côté, donc . Mais du coup,   donc on ne peut pas avoir .  Donc n'est pas injective.      Soit une application linéaire.  Alors ne peut pas être injective.     C'est faux, cette fois !  Par exemple, prenons l'application   Alors c'est une application linéaire: soient , , on a   De plus, est injective: Pour tout ,   donc , donc est injective.      Soit une application linéaire. On suppose que .  Alors est surjective.    est un s.e.v de , donc .  Il y a donc deux possibilités:   Soit : dans ce cas, , autrement dit, pour tout , . Ce n'est pas le cas ici, puisqu'il existe un vecteur tel que .  Soit , et dans ce cas, et est surjective: c'est donc le cas ici.    Remarque: En fait, par linéarité de , pour tout ,        Sur les endomorphismes de et    Une application est un endomorphisme de si, et seulement si, il existe tel que     C'est vrai !  Ce sont les fonctions linéaires que vous connaissez depuis le lycée. Démontrons-le proprement:  Supposons que est linéaire. Notons . Alors, pour tout , on a, puisque est linéaire et est un scalaire,   comme prévu.  Supposons qu'il existe un réel tel que pour tout , f(x)=ax. Alors est linéaire: en effet, pour tous , pour tout ,   donc est bien linéaire.      Une application est un endomorphisme de si, et seulement si, il existe tel que     C'est faux ! Il y a des applications linéaires qui n'ont pas cette tête là. Par exemple,   est une application linéaire: pour tous , , on a   Donc est bien linéaire, mais il n'existe pas de coefficient tel que   En effet, si c'était le cas, on aurait   ce qui est contradictoire.      Une application est un endomorphisme de si, et seulement si, il existe tel que     C'est faux aussi: il y a des applications linéaires qui n'ont pas non plus cette tête là. Par exemple,   est linéaire: pour tous , , on a   Donc est bien linéaire, mais il n'existe pas de coefficients tel que .  En effet, si c'était le cas, on aurait   ce qui est contradictoire.      Une application est linéaire si, et seulement si, il existe tel que     C'est vrai ! Montrons le par double implication  : Supposons qu'il existe deux coefficients tels que pour tout , . Montrons que est linéaire. On a, pour tous , ,   Si a cette tête-là, c'est bien une application linéaire.  Soit maintenant . On cherche deux réels tels que   On va faire ça par analyse-synthèse.   Analyse: si et existent, alors on a   donc forcément .   Synthèse: Notons . Alors, pour tout on a   donc, comme est linéaire,   exactement comme on voulait.       "
},
{
  "id": "al1-recap_chap5_app-lin-3-2-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-2-2",
  "type": "Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Soient deux espaces vectoriels, et soit une application linéaire.  Alors est injective si, et seulement si, est vide.     C'est faux ! Quelle que soit l'application linéaire , n'est jamais vide. En effet, on a toujours , donc .   contient au moins le vecteur nul, qui certes, n'est pas fascinant, mais existe quand même ! Pour le dire autrement,   Et ça n'empêche pas les applications linéaires de parfois être injectives: par exemple, l'application identité   est injective montrez-le ! , bien que .  Remarque: Par contre, pour que soit injective, il faut que le noyau de ne contienne que le vecteur nul, c'est-à-dire .   "
},
{
  "id": "al1-recap_chap5_app-lin-3-2-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-2-3",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Soient un espace vectoriel, et soit une application linéaire.  Alors soit a un seul élément, soit est infini.     C'est vrai !  Pour le voir, prenons . Il y a deux cas:   Cas 1:  pour tout vecteur : dans ce cas,   donc a un seul élément.  Cas 2: il existe un vecteur tel que . Mais dans ce cas, pour n'importe quel réel ,   et comme , si , alors  pourquoi, au fait ? .  Donc contient les vecteurs , qui sont tous différents, donc est un ensemble infini.    "
},
{
  "id": "al1-recap_chap5_app-lin-3-3-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-3-2",
  "type": "Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Soit un espace vectoriel et soit .  On suppose que .  Alors    Attention à la notation bizarre: quand est un endomorphisme, , (et non au carré, qui n'existe pas).  Autrement dit, ce qu'on suppose, c'est que pour tout , .   C'est faux !  L'implication   n'est pas forcément vérifiée.    Considérons par exemple l'endomorphisme de défini par   Alors, pour tout ,   donc , mais   donc  Remarque: Par contre, l'implication réciproque est vraie: si , alors on a, pour tout ,    "
},
{
  "id": "al1-recap_chap5_app-lin-3-3-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-3-3",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Soit un espace vectoriel et soit , .  On suppose que .  Alors, et est la symétrie par rapport à parallèlement à .     C'est faux !  Dans ce cas, on a effectivement , mais est une projection , et non une symétrie. En effet, une symétrie est bijective, et donc on aurait . Mais alors, on aurait et , ce qui contredit nos hypothèses.  Vérifions que .   Soit . Alors puisque , et on a un tel que puisque . Mais du coup, comme ,   donc, , et on a montré que .   Soit , montrons que se décompose en avec et .. Remarquons que ; clairement, , et d'un autre côté, si on note , alors   donc . On peut donc prendre et et on a la décomposition souhaitée.   De là, si on prend , avec sa décomposition , alors comme on a vu, , et donc est la projection sur parallèlement à .    Quel est le noyau d'une symétrie ?   "
},
{
  "id": "al1-recap_chap5_app-lin-3-3-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-3-4",
  "type": "Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Soit un espace vectoriel et soit , .  On suppose que .  Alors, si on note , est la symétrie par rapport à parallèlement à .     C'est vrai !  Si , alors  , et tout vecteur de se décompose en , avec et (voir la question précédente).  De là, si on prend , avec sa décomposition , alors comme on a vu, , et donc : donc est effectivement la symétrie par rapport à parallèlement à .   "
},
{
  "id": "al1-recap_chap5_app-lin-3-4-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-4-2",
  "type": "Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Soit une application linéaire.  Alors ne peut pas être surjective.     C'est vrai !  D'après le théorème du rang,   Or, donc   donc on ne peut pas avoir .  Donc n'est pas surjective.   "
},
{
  "id": "al1-recap_chap5_app-lin-3-4-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-4-3",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Soit une application linéaire.  Alors ne peut pas être injective.     C'est vrai !  D'après le théorème du rang,   Et d'un autre côté, donc . Mais du coup,   donc on ne peut pas avoir .  Donc n'est pas injective.   "
},
{
  "id": "al1-recap_chap5_app-lin-3-4-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-4-4",
  "type": "Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Soit une application linéaire.  Alors ne peut pas être injective.     C'est faux, cette fois !  Par exemple, prenons l'application   Alors c'est une application linéaire: soient , , on a   De plus, est injective: Pour tout ,   donc , donc est injective.   "
},
{
  "id": "al1-recap_chap5_app-lin-3-4-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-4-5",
  "type": "Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Soit une application linéaire. On suppose que .  Alors est surjective.    est un s.e.v de , donc .  Il y a donc deux possibilités:   Soit : dans ce cas, , autrement dit, pour tout , . Ce n'est pas le cas ici, puisqu'il existe un vecteur tel que .  Soit , et dans ce cas, et est surjective: c'est donc le cas ici.    Remarque: En fait, par linéarité de , pour tout ,    "
},
{
  "id": "al1-recap_chap5_app-lin-3-5-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-5-2",
  "type": "Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Une application est un endomorphisme de si, et seulement si, il existe tel que     C'est vrai !  Ce sont les fonctions linéaires que vous connaissez depuis le lycée. Démontrons-le proprement:  Supposons que est linéaire. Notons . Alors, pour tout , on a, puisque est linéaire et est un scalaire,   comme prévu.  Supposons qu'il existe un réel tel que pour tout , f(x)=ax. Alors est linéaire: en effet, pour tous , pour tout ,   donc est bien linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-3-5-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-5-3",
  "type": "Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Une application est un endomorphisme de si, et seulement si, il existe tel que     C'est faux ! Il y a des applications linéaires qui n'ont pas cette tête là. Par exemple,   est une application linéaire: pour tous , , on a   Donc est bien linéaire, mais il n'existe pas de coefficient tel que   En effet, si c'était le cas, on aurait   ce qui est contradictoire.   "
},
{
  "id": "al1-recap_chap5_app-lin-3-5-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-5-4",
  "type": "Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Une application est un endomorphisme de si, et seulement si, il existe tel que     C'est faux aussi: il y a des applications linéaires qui n'ont pas non plus cette tête là. Par exemple,   est linéaire: pour tous , , on a   Donc est bien linéaire, mais il n'existe pas de coefficients tel que .  En effet, si c'était le cas, on aurait   ce qui est contradictoire.   "
},
{
  "id": "al1-recap_chap5_app-lin-3-5-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-3.html#al1-recap_chap5_app-lin-3-5-5",
  "type": "Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Une application est linéaire si, et seulement si, il existe tel que     C'est vrai ! Montrons le par double implication  : Supposons qu'il existe deux coefficients tels que pour tout , . Montrons que est linéaire. On a, pour tous , ,   Si a cette tête-là, c'est bien une application linéaire.  Soit maintenant . On cherche deux réels tels que   On va faire ça par analyse-synthèse.   Analyse: si et existent, alors on a   donc forcément .   Synthèse: Notons . Alors, pour tout on a   donc, comme est linéaire,   exactement comme on voulait.     "
},
{
  "id": "al1-recap_chap5_app-lin-4",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-4.html",
  "type": "Section",
  "number": "2",
  "title": "— Testez vos réflexes, deuxième partie",
  "body": " Testez vos réflexes, deuxième partie   Une matrice, plusieurs applications    La matrice est la matrice d'une application linéaire dans les bases canoniques de et .    Faux !  Si était la matrice d'une application linéaire , alors les colonnes de seraient les coordonnées de et dans la base canonique de , avec   aurait 2 colonnes, et ces colonnes auraient 3 coefficients, donc serait une matrice . Et ce n'est pas le cas !      La matrice est la matrice d'une application linéaire dans les bases canoniques de et .    Vrai !  Ce qu'on sait, c'est que si existe, alors la première colonne de donne les coordonnées de dans la base canonique de , la deuxième colonne donne les coordonnées de , et la troisième donne les coordonnées de . Autrement dit:   Et que donne les autres vecteurs ?  Si on prend , alors . Donc, si existe,   S'il y a une application linéaire qui marche, c'est forcément   Maintenant, on vérifie que est bien linéaire (je vous laisse faire), et on a bien   Donc la matrice de dans les bases canoniques est bien .      Notons   Ce sont des bases de et de je vous laisse vérifier .   La matrice est la matrice d'une application linéaire dans les bases et .     Vrai !  Ce qu'on sait, c'est que si existe, alors les colonnes de donnent les coordonnées de , et dans la base . Autrement dit:   Et que donne les autres vecteurs ?  Prenons , et cherchons ses coordonnées dans la base . On cherche donc tels que   Ce qui revient à résoudre   On a donc, pour tout ,   Donc, si existe,   S'il y a une application linéaire qui marche, c'est forcément   Maintenant, on vérifie que est bien linéaire (je vous laisse faire), et on a bien       Notons et des bases canoniques de et .    La matrice est la matrice d'une application linéaire dans les bases canoniques.     Vrai !  Ce qu'on sait, c'est que si existe, alors   La 1ère colonne de donne les coordonnées de dans la base ,  la 2ème colonne donne les coordonnées de dans la base ,  la 3ème colonne donne les coordonnées de dans la base .   Autrement dit:   Et que donne pour les autres polynômes ?  Prenons , alors .  Donc, si existe,   S'il y a une application linéaire qui marche, c'est forcément   Maintenant, on vérifie que est bien linéaire (je vous laisse faire), et on a bien       Définition de la matrice d'une application linéaire    Soit un espace vectoriel de dimension , et une base de .  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est faux !  Puisque est la matrice de dans la base , la 3ème colonne donne (plus précisément, les coordonnées de dans la base ). Autrement dit:   Mais est une base, donc c'est une famille libre, donc . Donc , et donc .  Remarque: Par contre, : par le même raisonnement, les coordonnées de sont données par la 1ère colonne de , donc .      Soit un espace vectoriel de dimension , et une base de  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est vrai !  Il s'agit de voir si . Or, comme est linéaire,  Et, comme est la matrice de dans la base , les 2ème et 3ème colonnes de donnent les coordonnées de et dans la base : du coup, on a   Donc .      Soit un espace vectoriel de dimension , et une base de .  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est vrai !  Ce que nous dit la matrice , c'est que   En particulier, on a donc donc a un antécédent par .  Donc .      Soit un espace vectoriel de dimension , et une base de  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est faux !  Ce que nous dit la matrice , c'est que   Comme est une base, elle est génératrice, donc pour tout , il existe tels que . Et du coup   Donc, tous les sont combinaison linéaire de et .  Et comme est une base, c'est aussi une famille libre, donc n'est pas combinaison linéaire de et : donc .      Matrices de projection ou symétrie    On considère la matrice et on note l'endomorphisme de associé. Sélectionner les affirmations correctes.   est une symétrie  On calcule et on trouve   Donc , et donc n'est pas une symétrie.  est une projection  On calcule et on trouve   Donc , et donc est une projection.  est une bijection  On calcule , donc n'est pas une bijection.  On aurait pu s'en douter, car est une projection sur parallèlement à , donc, comme , , et donc n'est pas injective.   Le 2ème vecteur de la base canonique, est dans le noyau de .  Le vecteur est donné par la 2ème colonne de : .  Donc .      On considère la matrice et on note l'endomorphisme de associé. Sélectionner les affirmations correctes.   est une symétrie  On calcule et on trouve   Donc , et donc est une symétrie.  est une projection  On calcule et on trouve   Donc , et donc n'est pas une projection.  est une bijection  On calcule , donc est une bijection.  On aurait pu s'en douter, car est une symétrie, et , donc est bijective et sa bijection réciproque est .   Il existe un vecteur , non nul, qui est un point fixe de , c'est à dire .  L'application est une symétrie de , donc est la symétrie par rapport à un s.e.v. parallèlement à uns.e.v. , et dans ce cas, pour tout vecteur on a .  On peut le vérifier : on cherche donc tel que , ce qui donne:   Donc, tous les vecteurs pour , vérifient .      "
},
{
  "id": "al1-recap_chap5_app-lin-4-2-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-2-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  La matrice est la matrice d'une application linéaire dans les bases canoniques de et .    Faux !  Si était la matrice d'une application linéaire , alors les colonnes de seraient les coordonnées de et dans la base canonique de , avec   aurait 2 colonnes, et ces colonnes auraient 3 coefficients, donc serait une matrice . Et ce n'est pas le cas !   "
},
{
  "id": "al1-recap_chap5_app-lin-4-2-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-2-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  La matrice est la matrice d'une application linéaire dans les bases canoniques de et .    Vrai !  Ce qu'on sait, c'est que si existe, alors la première colonne de donne les coordonnées de dans la base canonique de , la deuxième colonne donne les coordonnées de , et la troisième donne les coordonnées de . Autrement dit:   Et que donne les autres vecteurs ?  Si on prend , alors . Donc, si existe,   S'il y a une application linéaire qui marche, c'est forcément   Maintenant, on vérifie que est bien linéaire (je vous laisse faire), et on a bien   Donc la matrice de dans les bases canoniques est bien .   "
},
{
  "id": "al1-recap_chap5_app-lin-4-2-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-2-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "  Notons   Ce sont des bases de et de je vous laisse vérifier .   La matrice est la matrice d'une application linéaire dans les bases et .     Vrai !  Ce qu'on sait, c'est que si existe, alors les colonnes de donnent les coordonnées de , et dans la base . Autrement dit:   Et que donne les autres vecteurs ?  Prenons , et cherchons ses coordonnées dans la base . On cherche donc tels que   Ce qui revient à résoudre   On a donc, pour tout ,   Donc, si existe,   S'il y a une application linéaire qui marche, c'est forcément   Maintenant, on vérifie que est bien linéaire (je vous laisse faire), et on a bien    "
},
{
  "id": "al1-recap_chap5_app-lin-4-2-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-2-5",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "  Notons et des bases canoniques de et .    La matrice est la matrice d'une application linéaire dans les bases canoniques.     Vrai !  Ce qu'on sait, c'est que si existe, alors   La 1ère colonne de donne les coordonnées de dans la base ,  la 2ème colonne donne les coordonnées de dans la base ,  la 3ème colonne donne les coordonnées de dans la base .   Autrement dit:   Et que donne pour les autres polynômes ?  Prenons , alors .  Donc, si existe,   S'il y a une application linéaire qui marche, c'est forcément   Maintenant, on vérifie que est bien linéaire (je vous laisse faire), et on a bien    "
},
{
  "id": "al1-recap_chap5_app-lin-4-3-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-3-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  Soit un espace vectoriel de dimension , et une base de .  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est faux !  Puisque est la matrice de dans la base , la 3ème colonne donne (plus précisément, les coordonnées de dans la base ). Autrement dit:   Mais est une base, donc c'est une famille libre, donc . Donc , et donc .  Remarque: Par contre, : par le même raisonnement, les coordonnées de sont données par la 1ère colonne de , donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-4-3-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-3-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  Soit un espace vectoriel de dimension , et une base de  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est vrai !  Il s'agit de voir si . Or, comme est linéaire,  Et, comme est la matrice de dans la base , les 2ème et 3ème colonnes de donnent les coordonnées de et dans la base : du coup, on a   Donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-4-3-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-3-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "  Soit un espace vectoriel de dimension , et une base de .  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est vrai !  Ce que nous dit la matrice , c'est que   En particulier, on a donc donc a un antécédent par .  Donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-4-3-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-3-5",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "  Soit un espace vectoriel de dimension , et une base de  Soit un endomorphisme dont la matrice dans la base est   Alors .     C'est faux !  Ce que nous dit la matrice , c'est que   Comme est une base, elle est génératrice, donc pour tout , il existe tels que . Et du coup   Donc, tous les sont combinaison linéaire de et .  Et comme est une base, c'est aussi une famille libre, donc n'est pas combinaison linéaire de et : donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-4-4-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-4-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  On considère la matrice et on note l'endomorphisme de associé. Sélectionner les affirmations correctes.   est une symétrie  On calcule et on trouve   Donc , et donc n'est pas une symétrie.  est une projection  On calcule et on trouve   Donc , et donc est une projection.  est une bijection  On calcule , donc n'est pas une bijection.  On aurait pu s'en douter, car est une projection sur parallèlement à , donc, comme , , et donc n'est pas injective.   Le 2ème vecteur de la base canonique, est dans le noyau de .  Le vecteur est donné par la 2ème colonne de : .  Donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-4-4-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-4.html#al1-recap_chap5_app-lin-4-4-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  On considère la matrice et on note l'endomorphisme de associé. Sélectionner les affirmations correctes.   est une symétrie  On calcule et on trouve   Donc , et donc est une symétrie.  est une projection  On calcule et on trouve   Donc , et donc n'est pas une projection.  est une bijection  On calcule , donc est une bijection.  On aurait pu s'en douter, car est une symétrie, et , donc est bijective et sa bijection réciproque est .   Il existe un vecteur , non nul, qui est un point fixe de , c'est à dire .  L'application est une symétrie de , donc est la symétrie par rapport à un s.e.v. parallèlement à uns.e.v. , et dans ce cas, pour tout vecteur on a .  On peut le vérifier : on cherche donc tel que , ce qui donne:   Donc, tous les vecteurs pour , vérifient .    "
},
{
  "id": "al1-recap_chap5_app-lin-5",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-5.html",
  "type": "Section",
  "number": "3",
  "title": "— Entraînez-vous : Applications linéaires",
  "body": " Entraînez-vous : Applications linéaires   Est-ce une application linéaire ?          Calculer et , pour      Exemple 2           Calculer pour , et quelconques.     Exemple 3         Calculer pour , et quelconques.     Exemple 4  Soient deux matrices fixées.        Calculer pour , et quelconques.     Exemple 5         C'est une question de cours !...ou simplement, une question de se rappeler qui est la transposée d'une matrice carrée.      Avec un paramètre   Quel est l'ensemble des tels que est linéaire ?  Exemple:   Si n'est linéaire que pour , taper \" \"  Si est linéaire pour et pour , taper \" \" (en mettant les alpha par ordre croissant)  Si est linéaire pour tout entre 0 et 2, taper \" \".  Si est linéaire quel que soit , taper \" \"    Exemple 1            Tout à fait !              Si est linéaire, que devrait donner ?    Exemple 2            Tout à fait !               Si est linéaire, que devrait donner ? Est-ce une condition nécessaire ou suffisante ou les deux ?   Exemple 3            Tout à fait !              Que vaut ?    Exemple 4            Tout à fait !              "
},
{
  "id": "al1-recap_chap5_app-lin-5-2-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-2-2",
  "type": "Exercise",
  "number": "3.1",
  "title": "",
  "body": "        Calculer et , pour    "
},
{
  "id": "al1-recap_chap5_app-lin-5-2-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-2-3",
  "type": "Exercise",
  "number": "3.2",
  "title": "Exemple 2.",
  "body": " Exemple 2           Calculer pour , et quelconques.   "
},
{
  "id": "al1-recap_chap5_app-lin-5-2-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-2-4",
  "type": "Exercise",
  "number": "3.3",
  "title": "Exemple 3.",
  "body": " Exemple 3         Calculer pour , et quelconques.   "
},
{
  "id": "al1-recap_chap5_app-lin-5-2-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-2-5",
  "type": "Exercise",
  "number": "3.4",
  "title": "Exemple 4.",
  "body": " Exemple 4  Soient deux matrices fixées.        Calculer pour , et quelconques.   "
},
{
  "id": "al1-recap_chap5_app-lin-5-2-6",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-2-6",
  "type": "Exercise",
  "number": "3.5",
  "title": "Exemple 5.",
  "body": " Exemple 5         C'est une question de cours !...ou simplement, une question de se rappeler qui est la transposée d'une matrice carrée.   "
},
{
  "id": "al1-recap_chap5_app-lin-5-3-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-3-3",
  "type": "Exercise",
  "number": "3.1",
  "title": "Exemple 1.",
  "body": "Exemple 1            Tout à fait !              Si est linéaire, que devrait donner ?  "
},
{
  "id": "al1-recap_chap5_app-lin-5-3-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#al1-recap_chap5_app-lin-5-3-4",
  "type": "Exercise",
  "number": "3.2",
  "title": "Exemple 2.",
  "body": " Exemple 2            Tout à fait !               Si est linéaire, que devrait donner ? Est-ce une condition nécessaire ou suffisante ou les deux ?  "
},
{
  "id": "exo-applin-alpha3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#exo-applin-alpha3",
  "type": "Exercise",
  "number": "3.3",
  "title": "Exemple 3.",
  "body": "Exemple 3            Tout à fait !              Que vaut ?  "
},
{
  "id": "exo-applin-alpha4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-5.html#exo-applin-alpha4",
  "type": "Exercise",
  "number": "3.4",
  "title": "Exemple 4.",
  "body": " Exemple 4            Tout à fait !            "
},
{
  "id": "al1-recap_chap5_app-lin-6",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-6.html",
  "type": "Section",
  "number": "4",
  "title": "— Entraînez-vous ! Image et noyau",
  "body": " Entraînez-vous ! Image et noyau    Exercice 1   On considère l'application     est linéaire.   Soient . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !   est linéaire et    donc       Non, on trouve en fait .   est linéaire et   donc        C'est ça !  Méthode 1: On calcule une base de   Donc, pour tout , donc . Donc et   Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base de l'espace de départ.  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   L'image par d'une famille génératrice de l'espace de départ donne une famille génératrice de .  Donc est une famille génératrice de .  De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre.  est une base de , et donc .     Non, ce n'est pas ça ! On a en fait .  Méthode 1: On calcule une base de   Donc, pour tout , donc . Donc et   Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base de l'espace de départ  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   L'image par d'une famille génératrice de l'espace de départ donne une famille génératrice de .  Donc est une famille génératrice de .  De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre.  est une base de , et donc .       Sélectionner les affirmations correctes.   est injective  On a trouvé que donc est injective.  est surjective.  On a trouvé que , donc est un s.e.v. de dimension 2 dans .  Donc , et donc est surjective.   n'est pas un isomorphisme linéaire  Si, c'en est un !  est une application linéaire injective et surjective, donc bijective: c'est un isomorphisme.  est un endomorphisme  Les espaces vectoriels de départ et d'arrivée de sont les mêmes donc est un endomorphisme.      Exercice 2   On considère     est linéaire.   Soient et . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.  Méthode 2: On peut aussi remarquer que, pour tout ,   avec . Donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !  est linéaire et   donc      Non, on trouve en fait .  est linéaire et   donc       C'est ça !   Méthode 1: On calcule une base de \\Im(f):   Donc pour tout , pour tout ,   donc , et .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang    Méthode 3: Avec l'image d'une base de l'espace de départ  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus maximum vecteurs. En fait, on a    est combinaison linéaire des deux autres, donc   La famille engendre , et ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .       Non, on trouve en fait que :  Méthode 1: On calcule une base de \\Im(f):   Donc pour tout , pour tout ,   donc , et .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang    Méthode 3: Avec l'image d'une base de l'espace de départ  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus maximum vecteurs. En fait, on a    est combinaison linéaire des deux autres, donc   La famille engendre , et ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .       Sélectionner les affirmations correctes.   est une application linéaire surjective  On a trouvé que , donc est un s.e.v. de dimension 2 dans . Donc, , et donc est surjective.  est une application linéaire injective  On a trouvé que donc n'est pas injective.  est un isomorphisme linéaire   surjective mais pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont différents donc n'est pas un endomorphisme.      Exercice 3   On considère     est linéaire   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .            C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   est injective.  est bien injective, mais comme n'est pas linéaire, on ne peut pas utiliser le noyau de pour le montrer. Il faut le faire à l'ancienne !  On trouve que, pour tous ,   Donc ! est injective.   n'est pas surjective.  Si, est surjective, mais comme elle n'est pas linéaire, on ne peut pas utiliser le théorème du rang pour le montrer. Il faut le faire à l'ancienne !  Soit , montrons qu'il existe tel que . Autrement dit, on résoud   Pour tout , , donc est surjective.   est un isomorphisme linéaire  est injective, surjective, donc bijective. Mais n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire donc n'est pas un endomorphisme.      Exercice 4   On considère     est linéaire.   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   est injective.  n'est pas injective: .  est surjective.  est en effet surjective, mais comme elle n'est pas linéaire, on ne peut pas le montrer avec le théorème du rang.  On doit le faire à l'ancienne : soit , on cherche tel que , autrement dit   Là, on peut prendre par exemple , et on trouve que, pour tout , , donc est surjective.  est un isomorphisme linéaire  n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.  n'est pas linéaire donc n'est pas un endomorphisme.       Exercice 5   On considère     est linéaire.   Soient . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.  Méthode 2: On peut aussi remarquer que, pour tout   avec . Donc f est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !  est linéaire et   La famille engendre . De plus, c'est une famille de deux vecteurs, non colinéaires, donc c'est une famille libre.   est une base de , et      Non, on trouve en fait que .  est linéaire et   La famille engendre . De plus, c'est une famille de deux vecteurs, non colinéaires, donc c'est une famille libre.   est une base de , et        C'est ça !  Méthode 1: On calcule une base de .  est linéaire et   Il s'agit donc de déterminer si ce système a des solutions. Or, si on l'échelonne, on trouve   Quel que soit , on a une infinité de solutions.  Donc pour tout , pour tous ,   donc et donc .  Et du coup, .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang   Méthode 3:Avec l'image d'une base de l'espace de départ   On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus deux vecteurs. Si on résoud le système donné par   on obtient que   Donc, pour on trouve   Et pour on trouve   donc finalement   De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .      Non, on trouve en fait que .  Méthode 1: On calcule une base de .  est linéaire et   Il s'agit donc de déterminer si ce système a des solutions. Or, si on l'échelonne, on trouve   Quel que soit , on a une infinité de solutions.  Donc pour tout , pour tous ,   donc et donc .  Et du coup, .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang   Méthode 3:Avec l'image d'une base de l'espace de départ   On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus deux vecteurs. Si on résoud le système donné par   on obtient que   Donc, pour on trouve   Et pour on trouve   donc finalement   De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .     Sélectionner les affirmations correctes.   est injective.  est linéaire et donc n'est pas injective.  est surjective.  , donc est un s.e.v de dimension 2 dans . Donc et est surjective.  est un isomorphisme linéaire  est surjective mais pas injective, donc n'est pas pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  est linéaire, mais les espaces vectoriels de départ et d'arrivée de sont différents donc n'est pas un endomorphisme.      Exercice 6   On considère     est linéaire.   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   est injective.  n'est pas injective:  est surjective.  Si , alors . Donc, tous les vecteurs tels que n'ont pas d'antécédents par .  Donc, par exemple, et n'est pas surjective.  est un isomorphisme linéaire  n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.   n'est pas linéaire donc n'est pas un endomorphisme.       Exercice 7   On considère     est linéaire.   Soient . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !   est linéaire et   engendre , et c'est une famille à un seul vecteur non nul, donc libre. Donc est une base de Ker(f).  Donc .    Non, en fait .   est linéaire et   engendre , et c'est une famille à un seul vecteur non nul, donc libre. Donc est une base de Ker(f).  Donc .       C'est ça !  Méthode 1: On calcule une base de .  est linéaire et, pour tout ,   engendre , et c'est une famille à un seul vecteur non nul, donc elle est libre.  Donc c'est une base de et .  Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base   est une base de . En particulier c'est une famille génératrice, donc   La famille engendre , mais elle contient le vecteur nul, donc elle n'est pas libre.  On a donc   et donc est une famille libre. C'est une base de , donc .     Non, en fait .  Méthode 1: On calcule une base de .  est linéaire et, pour tout ,   engendre , et c'est une famille à un seul vecteur non nul, donc elle est libre.  Donc c'est une base de et .  Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base   est une base de . En particulier c'est une famille génératrice, donc   La famille engendre , mais elle contient le vecteur nul, donc elle n'est pas libre.  On a donc   et donc est une famille libre. C'est une base de , donc .     Sélectionner les affirmations correctes.   est injective.  donc n'est pas injective.  est surjective.  donc n'est pas surjective.  n'est pas un isomorphisme linéaire  n'est ni surjective ni injective, donc pas bijective. Ce nest pas un isomorphisme.  n'est pas un endomorphisme.  est linéaire, mais les espaces vectoriels de départ et d'arrivée de sont différents donc n'est pas un endomorphisme.      Exercice 8   On considère     est linéaire   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .            C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   est injective.  est bien injective.  est surjective.  donc est surjective.  est un isomorphisme linéaire  est injective, surjective, donc bijective. Mais n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire donc n'est pas un endomorphisme.     "
},
{
  "id": "al1-recap_chap5_app-lin-6-3-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-3-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-3-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-3-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !   est linéaire et    donc       Non, on trouve en fait .   est linéaire et   donc        C'est ça !  Méthode 1: On calcule une base de   Donc, pour tout , donc . Donc et   Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base de l'espace de départ.  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   L'image par d'une famille génératrice de l'espace de départ donne une famille génératrice de .  Donc est une famille génératrice de .  De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre.  est une base de , et donc .     Non, ce n'est pas ça ! On a en fait .  Méthode 1: On calcule une base de   Donc, pour tout , donc . Donc et   Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base de l'espace de départ  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   L'image par d'une famille génératrice de l'espace de départ donne une famille génératrice de .  Donc est une famille génératrice de .  De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre.  est une base de , et donc .     "
},
{
  "id": "al1-recap_chap5_app-lin-6-3-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-3-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective  On a trouvé que donc est injective.  est surjective.  On a trouvé que , donc est un s.e.v. de dimension 2 dans .  Donc , et donc est surjective.   n'est pas un isomorphisme linéaire  Si, c'en est un !  est une application linéaire injective et surjective, donc bijective: c'est un isomorphisme.  est un endomorphisme  Les espaces vectoriels de départ et d'arrivée de sont les mêmes donc est un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-4-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-4-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire.   Soient et . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.  Méthode 2: On peut aussi remarquer que, pour tout ,   avec . Donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-4-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-4-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !  est linéaire et   donc      Non, on trouve en fait .  est linéaire et   donc       C'est ça !   Méthode 1: On calcule une base de \\Im(f):   Donc pour tout , pour tout ,   donc , et .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang    Méthode 3: Avec l'image d'une base de l'espace de départ  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus maximum vecteurs. En fait, on a    est combinaison linéaire des deux autres, donc   La famille engendre , et ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .       Non, on trouve en fait que :  Méthode 1: On calcule une base de \\Im(f):   Donc pour tout , pour tout ,   donc , et .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang    Méthode 3: Avec l'image d'une base de l'espace de départ  On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus maximum vecteurs. En fait, on a    est combinaison linéaire des deux autres, donc   La famille engendre , et ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .     "
},
{
  "id": "al1-recap_chap5_app-lin-6-4-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-4-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est une application linéaire surjective  On a trouvé que , donc est un s.e.v. de dimension 2 dans . Donc, , et donc est surjective.  est une application linéaire injective  On a trouvé que donc n'est pas injective.  est un isomorphisme linéaire   surjective mais pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont différents donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-5-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-5-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-5-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-5-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .            C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-5-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-5-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  est bien injective, mais comme n'est pas linéaire, on ne peut pas utiliser le noyau de pour le montrer. Il faut le faire à l'ancienne !  On trouve que, pour tous ,   Donc ! est injective.   n'est pas surjective.  Si, est surjective, mais comme elle n'est pas linéaire, on ne peut pas utiliser le théorème du rang pour le montrer. Il faut le faire à l'ancienne !  Soit , montrons qu'il existe tel que . Autrement dit, on résoud   Pour tout , , donc est surjective.   est un isomorphisme linéaire  est injective, surjective, donc bijective. Mais n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-6-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-6-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire.   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-6-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-6-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-6-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-6-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  n'est pas injective: .  est surjective.  est en effet surjective, mais comme elle n'est pas linéaire, on ne peut pas le montrer avec le théorème du rang.  On doit le faire à l'ancienne : soit , on cherche tel que , autrement dit   Là, on peut prendre par exemple , et on trouve que, pour tout , , donc est surjective.  est un isomorphisme linéaire  n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.  n'est pas linéaire donc n'est pas un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-6-7-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-7-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.  Méthode 2: On peut aussi remarquer que, pour tout   avec . Donc f est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-7-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-7-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !  est linéaire et   La famille engendre . De plus, c'est une famille de deux vecteurs, non colinéaires, donc c'est une famille libre.   est une base de , et      Non, on trouve en fait que .  est linéaire et   La famille engendre . De plus, c'est une famille de deux vecteurs, non colinéaires, donc c'est une famille libre.   est une base de , et        C'est ça !  Méthode 1: On calcule une base de .  est linéaire et   Il s'agit donc de déterminer si ce système a des solutions. Or, si on l'échelonne, on trouve   Quel que soit , on a une infinité de solutions.  Donc pour tout , pour tous ,   donc et donc .  Et du coup, .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang   Méthode 3:Avec l'image d'une base de l'espace de départ   On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus deux vecteurs. Si on résoud le système donné par   on obtient que   Donc, pour on trouve   Et pour on trouve   donc finalement   De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .      Non, on trouve en fait que .  Méthode 1: On calcule une base de .  est linéaire et   Il s'agit donc de déterminer si ce système a des solutions. Or, si on l'échelonne, on trouve   Quel que soit , on a une infinité de solutions.  Donc pour tout , pour tous ,   donc et donc .  Et du coup, .  Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang   Méthode 3:Avec l'image d'une base de l'espace de départ   On sait que   est une base de . En particulier, c'est une famille génératrice. On a donc   Donc est une famille génératrice de .  Mais ce n'est pas une famille libre: les familles libres de ont au plus deux vecteurs. Si on résoud le système donné par   on obtient que   Donc, pour on trouve   Et pour on trouve   donc finalement   De plus, ces deux vecteurs sont non colinéaires, donc ils forment une famille libre: c'est donc une base de , et donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-6-7-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-7-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  est linéaire et donc n'est pas injective.  est surjective.  , donc est un s.e.v de dimension 2 dans . Donc et est surjective.  est un isomorphisme linéaire  est surjective mais pas injective, donc n'est pas pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  est linéaire, mais les espaces vectoriels de départ et d'arrivée de sont différents donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-8-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-8-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire.   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-8-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-8-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-8-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-8-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  n'est pas injective:  est surjective.  Si , alors . Donc, tous les vecteurs tels que n'ont pas d'antécédents par .  Donc, par exemple, et n'est pas surjective.  est un isomorphisme linéaire  n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.   n'est pas linéaire donc n'est pas un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-6-9-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-9-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   et d'un autre côté   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-9-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-9-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !   est linéaire et   engendre , et c'est une famille à un seul vecteur non nul, donc libre. Donc est une base de Ker(f).  Donc .    Non, en fait .   est linéaire et   engendre , et c'est une famille à un seul vecteur non nul, donc libre. Donc est une base de Ker(f).  Donc .       C'est ça !  Méthode 1: On calcule une base de .  est linéaire et, pour tout ,   engendre , et c'est une famille à un seul vecteur non nul, donc elle est libre.  Donc c'est une base de et .  Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base   est une base de . En particulier c'est une famille génératrice, donc   La famille engendre , mais elle contient le vecteur nul, donc elle n'est pas libre.  On a donc   et donc est une famille libre. C'est une base de , donc .     Non, en fait .  Méthode 1: On calcule une base de .  est linéaire et, pour tout ,   engendre , et c'est une famille à un seul vecteur non nul, donc elle est libre.  Donc c'est une base de et .  Méthode 2: Avec le théorème du rang.  On a donc par le théorème du rang   Méthode 3: Avec l'image d'une base   est une base de . En particulier c'est une famille génératrice, donc   La famille engendre , mais elle contient le vecteur nul, donc elle n'est pas libre.  On a donc   et donc est une famille libre. C'est une base de , donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-6-9-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-9-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  donc n'est pas injective.  est surjective.  donc n'est pas surjective.  n'est pas un isomorphisme linéaire  n'est ni surjective ni injective, donc pas bijective. Ce nest pas un isomorphisme.  n'est pas un endomorphisme.  est linéaire, mais les espaces vectoriels de départ et d'arrivée de sont différents donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-10-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-10-3",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": " est linéaire   Soit . On calcule   et d'un autre côté   Donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-10-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-10-4",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .            C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-6-10-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-6.html#al1-recap_chap5_app-lin-6-10-5",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  est bien injective.  est surjective.  donc est surjective.  est un isomorphisme linéaire  est injective, surjective, donc bijective. Mais n'est pas linéaire, ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-7",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-7.html",
  "type": "Section",
  "number": "5",
  "title": "— Entraînez-vous ! Matrices et applications linéaires",
  "body": "  Entraînez-vous ! Matrices et applications linéaires   Consignes:  Pour les tailles des matrices: si la matrice est, par exemple,   écrivez  Pour les lignes\/colonnes de matrices: Si on demande, par exemple, la première colonne de   écrivez    Exercice 1   On considère l'application linéaire      Donner la taille de la matrice qui représente dans la base canonique de .  Taille:       C'est ça !  est un endormorphisme de donc la matrice de (dans n'importe quelle base) est de taille .      est un endormorphisme de donc la matrice de (dans n'importe quelle base) est de taille .        Donner les coefficients de la première colonne de la matrice qui représente dans la base canonique de .   :       C'est ça !  On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve       On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve         Donner les coefficients de la deuxième colonne de la matrice qui représente dans la base de , où    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -5 et 2.  Méthode 2: On utilise la matrice de passage de à et la formule de changement de base pour les vecteurs:   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier:       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -5 et 2.  Méthode 2: On utilise la matrice de passage de à et la formule de changement de base pour les vecteurs:   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier:         Exercice 2   On considère l'application linéaire      Donner la taille de la matrice qui représente dans les bases canoniques de et .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .        Donner les coefficients de la première colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule  Les coefficients de dans la base sont 1 et 1, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve       On calcule  Les coefficients de dans la base sont 1 et 1, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve         Donner les coefficients de la première colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule  Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -4 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On put utiliser la formule de changement de base pour calculer en entier:  Notons la matrice de passage de à :   On a alors       On calcule  Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -4 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On put utiliser la formule de changement de base pour calculer en entier:  Notons la matrice de passage de à :   On a alors         Exercice 3   On considère l'application linéaire      Donner la taille de la matrice qui représente dans les bases canoniques de et .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .        Donner les coefficients de la troisième colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve       On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve         Donner les coefficients de la troisième colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -1 et -1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier.  Notons la matrice de passage de à :   On a alors       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -1 et -1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier.  Notons la matrice de passage de à :   On a alors         Exercice 4   On considère l'application linéaire      Donner la taille de la matrice qui représente dans les bases canoniques de et de .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .        Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   Les coefficients de dans la base sont 0,0,0 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve       On calcule   Les coefficients de dans la base sont 0,0,0 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve         Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -3,2,-4, et 1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: avec la matrice de passage de à    On a       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -3,2,-4, et 1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: avec la matrice de passage de à    On a        "
},
{
  "id": "al1-recap_chap5_app-lin-7-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Consignes: "
},
{
  "id": "al1-recap_chap5_app-lin-7-11-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-11-3",
  "type": "Exercise",
  "number": "5.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans la base canonique de .  Taille:       C'est ça !  est un endormorphisme de donc la matrice de (dans n'importe quelle base) est de taille .      est un endormorphisme de donc la matrice de (dans n'importe quelle base) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-7-11-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-11-4",
  "type": "Exercise",
  "number": "5.2",
  "title": "",
  "body": "  Donner les coefficients de la première colonne de la matrice qui représente dans la base canonique de .   :       C'est ça !  On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve       On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve      "
},
{
  "id": "al1-recap_chap5_app-lin-7-11-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-11-5",
  "type": "Exercise",
  "number": "5.3",
  "title": "",
  "body": "  Donner les coefficients de la deuxième colonne de la matrice qui représente dans la base de , où    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -5 et 2.  Méthode 2: On utilise la matrice de passage de à et la formule de changement de base pour les vecteurs:   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier:       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -5 et 2.  Méthode 2: On utilise la matrice de passage de à et la formule de changement de base pour les vecteurs:   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier:      "
},
{
  "id": "al1-recap_chap5_app-lin-7-12-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-12-3",
  "type": "Exercise",
  "number": "5.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans les bases canoniques de et .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-7-12-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-12-4",
  "type": "Exercise",
  "number": "5.2",
  "title": "",
  "body": "  Donner les coefficients de la première colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule  Les coefficients de dans la base sont 1 et 1, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve       On calcule  Les coefficients de dans la base sont 1 et 1, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve      "
},
{
  "id": "al1-recap_chap5_app-lin-7-12-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-12-5",
  "type": "Exercise",
  "number": "5.3",
  "title": "",
  "body": "  Donner les coefficients de la première colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule  Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -4 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On put utiliser la formule de changement de base pour calculer en entier:  Notons la matrice de passage de à :   On a alors       On calcule  Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc donc les coefficients de la deuxième colonne de sont -4 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On put utiliser la formule de changement de base pour calculer en entier:  Notons la matrice de passage de à :   On a alors      "
},
{
  "id": "al1-recap_chap5_app-lin-7-13-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-13-3",
  "type": "Exercise",
  "number": "5.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans les bases canoniques de et .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-7-13-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-13-4",
  "type": "Exercise",
  "number": "5.2",
  "title": "",
  "body": "  Donner les coefficients de la troisième colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve       On calcule   Les coefficients de dans la base sont 0 et 1 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve      "
},
{
  "id": "al1-recap_chap5_app-lin-7-13-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-13-5",
  "type": "Exercise",
  "number": "5.3",
  "title": "",
  "body": "  Donner les coefficients de la troisième colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -1 et -1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier.  Notons la matrice de passage de à :   On a alors       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -1 et -1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier.  Notons la matrice de passage de à :   On a alors      "
},
{
  "id": "al1-recap_chap5_app-lin-7-14-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-14-3",
  "type": "Exercise",
  "number": "5.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans les bases canoniques de et de .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-7-14-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-14-4",
  "type": "Exercise",
  "number": "5.2",
  "title": "",
  "body": "  Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   Les coefficients de dans la base sont 0,0,0 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve       On calcule   Les coefficients de dans la base sont 0,0,0 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve      "
},
{
  "id": "al1-recap_chap5_app-lin-7-14-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-7.html#al1-recap_chap5_app-lin-7-14-5",
  "type": "Exercise",
  "number": "5.3",
  "title": "",
  "body": "  Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -3,2,-4, et 1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: avec la matrice de passage de à    On a       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que , ce qui donne   donc donc les coefficients de la deuxième colonne de sont -3,2,-4, et 1.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: avec la matrice de passage de à    On a      "
},
{
  "id": "al1-recap_chap5_app-lin-8",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-8.html",
  "type": "Section",
  "number": "6",
  "title": "— Testez vos réflexes : taille des matrices",
  "body": "  Testez vos réflexes : taille des matrices   Taille des matrices   Niveau 1  Pour chacune des applications suivantes:   Si admet une matrice représentative dans des bases de et de , donner la taille de la matrice, par exemple  Si n'a pas de matrice représentative, indiquer .                  C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça ! n'est pas linéaire, donc n'a pas de matrice représentative.   Non, n'admet une matrice représentative.  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Mais n'est pas linéaire. En effet,   Seules les applications linéaires sont représentées par des matrices, donc n'a pas une matrice représentative.      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Il y a des bases sur : par exemple, est une base sur Challenge: Déterminer toutes les bases de .  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça ! n'est pas linéaire, donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Mais n'est pas linéaire: si on prend, par exemple , . On calcule   Seules les applications linéaires sont représentées par des matrices, donc n'a pas une matrice représentative.        Niveau 2  Pour chacune des applications suivantes:   Si admet une matrice représentative dans des bases de et de , donner la taille de la matrice, par exemple  Si n'a pas de matrice représentative, indiquer .                 C'est ça ! est linéaire et , donc si on choisit des bases de et , admet dans ces bases une matrice de taille .   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ).  Et, pour tout (polynôme de degré ), est un polynôme de degré , autrement dit : est à valeurs dans un e.v. de dimension finie ( ).  Enfin, est linéaire: prenons , et . On calcule    admet une matrice représentative, de taille .      C'est ça ! est définie entre deux espaces vectoriels de dimension infinie, donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  En effet, est linéaire (même preuve qu'à la question précédente).  Mais n'est pas définie sur un espace vectoriel de dimension finie: est un espace vectoriel de dimension infinie .  En effet, un e.v. est de dimension finie s'il admet une famille génératrice finie . Et ce n'est pas le cas de : si avait une famille génératrice finie, alors il s'agirait d'une famille finie de polynômes   telle que tout polynôme de serait combinaison linéaire de :   Mais le degré de est, au plus, : si, par exemple, le plus grand degré parmi les est 327, alors ne peut pas être de degré 328.  Mais des polynômes de degré 328, il y en a: , par exemple.  Mais du coup, n'est pas combinaison linéaire des polynômes , et donc n'est pas génératrice: contradiction .  Donc n'est pas de dimension finie, et donc n'a pas de matrice représentatrice, même si elle est linéaire.      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie : .  Et, si , est un polynôme de degré , donc   Du coup,   donc    est un polynôme de degré . Donc est à valeur dans l'e.v. , qui est de dimension 9.  Enfin, est linéaire: prenons , et . On calcule    est linéaire et définie entre deux e.v. de dimension finie, donc admet une matrice représentative, de taille .      C'est ça !  n'est pas linéaire, donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  En effet, est définie sur un espace vectoriel de dimension finie : .  Et, si , est un polynôme de degré , donc   Du coup,   et   donc est un polynôme de degré : est à valeurs dans l'e.v. de dimension finie .  Mais n'est pas linéaire: si on prend, par exemple , . On calcule   Seules les applications linéaires sont représentées par des matrices, donc n'a pas une matrice représentative.        Niveau 2.5  Pour chacune des applications suivantes:   Si admet une matrice représentative dans des bases de et de , donner la taille de la matrice, par exemple  Si n'a pas de matrice représentative, indiquer .                 C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça !   Non, n'admet pas de matrice représentative.  En effet, est linéaire (même preuve qu'à la question précédente).  Mais n'est pas définie sur un espace vectoriel de dimension finie: est un espace vectoriel de dimension infinie .  En effet, un e.v. est de dimension finie s'il admet une famille génératrice finie . Et ce n'est pas le cas de : si avait une famille génératrice finie de fonctions dérivables   alors, toutes les familles libres de auraient au plus vecteurs.  Or, si on prend   Alors est une famille libre Je vous laisse vérifier ! qui a vecteurs: contradiction .  Donc n'est pas de dimension finie, et donc n'a pas de matrice représentatrice, même si elle est linéaire à valeurs dans un e.v. de dimension finie.      C'est ça !  est définie sur , qui est un e.v. de dimension infinie. Donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  Pourtant, est linéaire: prenons est l'ensemble des suites réelles , . On note la suite :   et on calcule   est linéaire: mais elle n'a pas de matrice représentative, car elle est définie sur qui est un e.v. de dimension infinie.  En effet, un e.v. est de dimension finie s'il admet une famille génératrice finie . Et ce n'est pas le cas de : si avait une famille génératrice finie de faite de suites   alors, toutes les familles libres de auraient au plus vecteurs.  Or, si on prend les suites    Alors est une famille libre Je vous laisse vérifier ! qui a vecteurs: contradiction .  Donc n'est pas de dimension finie, et donc n'a pas de matrice représentatrice, même si elle est linéaire à valeurs dans un e.v. de dimension finie.      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur , qui est un e.v. de dimension finie.  Et, pour tout , on a   donc est à valeurs dans l'e.v. de dimension finie .  Enfin, est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .        "
},
{
  "id": "al1-recap_chap5_app-lin-8-2-2",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-8.html#al1-recap_chap5_app-lin-8-2-2",
  "type": "Exercise",
  "number": "6.1",
  "title": "Niveau 1.",
  "body": " Niveau 1  Pour chacune des applications suivantes:   Si admet une matrice représentative dans des bases de et de , donner la taille de la matrice, par exemple  Si n'a pas de matrice représentative, indiquer .                  C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça ! n'est pas linéaire, donc n'a pas de matrice représentative.   Non, n'admet une matrice représentative.  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Mais n'est pas linéaire. En effet,   Seules les applications linéaires sont représentées par des matrices, donc n'a pas une matrice représentative.      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Il y a des bases sur : par exemple, est une base sur Challenge: Déterminer toutes les bases de .  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça ! n'est pas linéaire, donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Mais n'est pas linéaire: si on prend, par exemple , . On calcule   Seules les applications linéaires sont représentées par des matrices, donc n'a pas une matrice représentative.      "
},
{
  "id": "al1-recap_chap5_app-lin-8-2-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-8.html#al1-recap_chap5_app-lin-8-2-3",
  "type": "Exercise",
  "number": "6.2",
  "title": "Niveau 2.",
  "body": " Niveau 2  Pour chacune des applications suivantes:   Si admet une matrice représentative dans des bases de et de , donner la taille de la matrice, par exemple  Si n'a pas de matrice représentative, indiquer .                 C'est ça ! est linéaire et , donc si on choisit des bases de et , admet dans ces bases une matrice de taille .   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ).  Et, pour tout (polynôme de degré ), est un polynôme de degré , autrement dit : est à valeurs dans un e.v. de dimension finie ( ).  Enfin, est linéaire: prenons , et . On calcule    admet une matrice représentative, de taille .      C'est ça ! est définie entre deux espaces vectoriels de dimension infinie, donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  En effet, est linéaire (même preuve qu'à la question précédente).  Mais n'est pas définie sur un espace vectoriel de dimension finie: est un espace vectoriel de dimension infinie .  En effet, un e.v. est de dimension finie s'il admet une famille génératrice finie . Et ce n'est pas le cas de : si avait une famille génératrice finie, alors il s'agirait d'une famille finie de polynômes   telle que tout polynôme de serait combinaison linéaire de :   Mais le degré de est, au plus, : si, par exemple, le plus grand degré parmi les est 327, alors ne peut pas être de degré 328.  Mais des polynômes de degré 328, il y en a: , par exemple.  Mais du coup, n'est pas combinaison linéaire des polynômes , et donc n'est pas génératrice: contradiction .  Donc n'est pas de dimension finie, et donc n'a pas de matrice représentatrice, même si elle est linéaire.      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie : .  Et, si , est un polynôme de degré , donc   Du coup,   donc    est un polynôme de degré . Donc est à valeur dans l'e.v. , qui est de dimension 9.  Enfin, est linéaire: prenons , et . On calcule    est linéaire et définie entre deux e.v. de dimension finie, donc admet une matrice représentative, de taille .      C'est ça !  n'est pas linéaire, donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  En effet, est définie sur un espace vectoriel de dimension finie : .  Et, si , est un polynôme de degré , donc   Du coup,   et   donc est un polynôme de degré : est à valeurs dans l'e.v. de dimension finie .  Mais n'est pas linéaire: si on prend, par exemple , . On calcule   Seules les applications linéaires sont représentées par des matrices, donc n'a pas une matrice représentative.      "
},
{
  "id": "al1-recap_chap5_app-lin-8-2-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-8.html#al1-recap_chap5_app-lin-8-2-4",
  "type": "Exercise",
  "number": "6.3",
  "title": "Niveau 2.5.",
  "body": " Niveau 2.5  Pour chacune des applications suivantes:   Si admet une matrice représentative dans des bases de et de , donner la taille de la matrice, par exemple  Si n'a pas de matrice représentative, indiquer .                 C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur un espace vectoriel de dimension finie ( ) à valeurs dans un e.v. de dimension finie ( ).  Et est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      C'est ça !   Non, n'admet pas de matrice représentative.  En effet, est linéaire (même preuve qu'à la question précédente).  Mais n'est pas définie sur un espace vectoriel de dimension finie: est un espace vectoriel de dimension infinie .  En effet, un e.v. est de dimension finie s'il admet une famille génératrice finie . Et ce n'est pas le cas de : si avait une famille génératrice finie de fonctions dérivables   alors, toutes les familles libres de auraient au plus vecteurs.  Or, si on prend   Alors est une famille libre Je vous laisse vérifier ! qui a vecteurs: contradiction .  Donc n'est pas de dimension finie, et donc n'a pas de matrice représentatrice, même si elle est linéaire à valeurs dans un e.v. de dimension finie.      C'est ça !  est définie sur , qui est un e.v. de dimension infinie. Donc n'a pas de matrice représentative.   Non, n'admet pas de matrice représentative.  Pourtant, est linéaire: prenons est l'ensemble des suites réelles , . On note la suite :   et on calcule   est linéaire: mais elle n'a pas de matrice représentative, car elle est définie sur qui est un e.v. de dimension infinie.  En effet, un e.v. est de dimension finie s'il admet une famille génératrice finie . Et ce n'est pas le cas de : si avait une famille génératrice finie de faite de suites   alors, toutes les familles libres de auraient au plus vecteurs.  Or, si on prend les suites    Alors est une famille libre Je vous laisse vérifier ! qui a vecteurs: contradiction .  Donc n'est pas de dimension finie, et donc n'a pas de matrice représentatrice, même si elle est linéaire à valeurs dans un e.v. de dimension finie.      C'est ça !   Non, admet une matrice représentative de taille  En effet, est définie sur , qui est un e.v. de dimension finie.  Et, pour tout , on a   donc est à valeurs dans l'e.v. de dimension finie .  Enfin, est linéaire: prenons , . On calcule    admet une matrice représentative, de taille .      "
},
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "7",
  "title": "— Entraînez-vous ! Symétries et projections",
  "body": " Entraînez-vous ! Symétries et projections   Exercice 1   On considère les vecteurs suivants dans :     On note la projection sur parallèlement à . Calculer             C'est ça ! Dans ce cas, , et comme est une famille libre, .    Non ! Ici, , et comme est une famille libre, .      C'est ça ! Dans ce cas, , et comme est une famille libre, .      Non ! Ici, , et comme est une famille libre, .     On note la matrice de dans la base de . Donner  ...le nombre de sur la diagonale de :  ...le nombre de sur la diagonale de :  ...le nombre de coefficients non nuls de :      C'est ça !  On a donc la matrice est   donc il y a 3 zéros sur la diagonale de .     Non !  On a donc la matrice est   donc il y a 3 zéros sur la diagonale de .       C'est ça !  On a donc la matrice est   donc il n'y a pas de -1 zéros sur la diagonale de .  On aurait pu s'en douter : comme est une projection, il n'existe aucun vecteur tel que , car sinon, on aurait .     Non !  On a donc la matrice est   donc il n'y a pas de -1 zéros sur la diagonale de .  On aurait pu s'en douter : comme est une projection, il n'existe aucun vecteur tel que , car sinon, on aurait .     C'est ça !  On a donc la matrice est   donc il y a un coefficient non nul dans .     Non !  On a donc la matrice est   donc il y a ul seuk coefficient non nul dans .      On note la matrice de dans la base canonique de . Donner  ...le nombre de sur la diagonale de :  ...le nombre de sur la diagonale de :  ...le nombre de coefficients non nuls de :      C'est ça !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun -1 sur la diagonale de .     Non !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun -1 sur la diagonale de .       C'est ça !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun zéro sur la diagonale de .     Non !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun zéro sur la diagonale de .     C'est ça !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il y a 16 coefficients non nuls dans .     Non !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il y a 16 coefficients non nuls dans .      "
},
{
  "id": "sec--2-3",
  "level": "2",
  "url": "sec-.html#sec--2-3",
  "type": "Exercise",
  "number": "7.1",
  "title": "",
  "body": " On note la projection sur parallèlement à . Calculer             C'est ça ! Dans ce cas, , et comme est une famille libre, .    Non ! Ici, , et comme est une famille libre, .      C'est ça ! Dans ce cas, , et comme est une famille libre, .      Non ! Ici, , et comme est une famille libre, .   "
},
{
  "id": "sec--2-4",
  "level": "2",
  "url": "sec-.html#sec--2-4",
  "type": "Exercise",
  "number": "7.2",
  "title": "",
  "body": " On note la matrice de dans la base de . Donner  ...le nombre de sur la diagonale de :  ...le nombre de sur la diagonale de :  ...le nombre de coefficients non nuls de :      C'est ça !  On a donc la matrice est   donc il y a 3 zéros sur la diagonale de .     Non !  On a donc la matrice est   donc il y a 3 zéros sur la diagonale de .       C'est ça !  On a donc la matrice est   donc il n'y a pas de -1 zéros sur la diagonale de .  On aurait pu s'en douter : comme est une projection, il n'existe aucun vecteur tel que , car sinon, on aurait .     Non !  On a donc la matrice est   donc il n'y a pas de -1 zéros sur la diagonale de .  On aurait pu s'en douter : comme est une projection, il n'existe aucun vecteur tel que , car sinon, on aurait .     C'est ça !  On a donc la matrice est   donc il y a un coefficient non nul dans .     Non !  On a donc la matrice est   donc il y a ul seuk coefficient non nul dans .    "
},
{
  "id": "sec--2-5",
  "level": "2",
  "url": "sec-.html#sec--2-5",
  "type": "Exercise",
  "number": "7.3",
  "title": "",
  "body": " On note la matrice de dans la base canonique de . Donner  ...le nombre de sur la diagonale de :  ...le nombre de sur la diagonale de :  ...le nombre de coefficients non nuls de :      C'est ça !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun -1 sur la diagonale de .     Non !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun -1 sur la diagonale de .       C'est ça !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun zéro sur la diagonale de .     Non !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il n'y a aucun zéro sur la diagonale de .     C'est ça !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il y a 16 coefficients non nuls dans .     Non !  On utilise la formule de changement de base : est la matrice de passage de la base canonique à la base , donc la matrice de dans la base canonique est   donc il y a 16 coefficients non nuls dans .    "
},
{
  "id": "al1-recap_chap5_app-lin-10",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-10.html",
  "type": "Section",
  "number": "8",
  "title": "— Entraînez-vous ! Applications linéaires dans d’autres espaces vectoriels",
  "body": " Entraînez-vous ! Applications linéaires dans d'autres espaces vectoriels   Exercice 1   On considère     est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !  est linéaire; déterminons son noyau.  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Donc engendre et est libre, car ces deux polynômes ne sont pas colinéaires. Donc c'est une base de .  Donc .    Non, en fait .  est linéaire; reste à déterminer son noyau.  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Donc engendre et est libre, car ces deux polynômes ne sont pas colinéaires. Donc c'est une base de .  Donc .       C'est ça !  Méthode 1: Calcul d'une base de .  est linéaire et, pour tout ,   On en déduit que, pour tous réels,   Par exemple, en prenant on trouve   Tout a un (et même plusieurs) antécédents par .  Donc est surjective, donc , et donc    Méthode 2: Théorème du rang.  On a donc, par le théorème du rang,    Méthode 3: Image d'une base  La base canonique de est   C'est en particulier une famille génératrice, donc   donc est une famille génératrice de . Mais ce n'est pas une famille libre:   donc on a en fait   et ces deux vecteurs sot non colinéaires, donc forment une famille libre.  Donc est une base de , et donc .    Non, on a en fait .  Méthode 1: Calcul d'une base de .  est linéaire et, pour tout ,   On en déduit que, pour tous réels,   Par exemple, en prenant on trouve   Tout a un (et même plusieurs) antécédents par .  Donc est surjective, donc , et donc    Méthode 2: Théorème du rang.  On a donc, par le théorème du rang,    Méthode 3: Image d'une base  La base canonique de est   C'est en particulier une famille génératrice, donc   donc est une famille génératrice de . Mais ce n'est pas une famille libre:   donc on a en fait   et ces deux vecteurs sot non colinéaires, donc forment une famille libre.  Donc est une base de , et donc .     Sélectionner les affirmations correctes.   est injective.  donc n'est pas injective.  est surjective.  donc est surjective.  n'est pas un isomorphisme linéaire  n'est pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les différents donc n'est pas un endomorphisme.       Exercice 2   On considère     est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Or, un polynôme est égal au polynôme nul si, et seulement si, tous ses coefficients sont nuls. On en déduit que ssi   donc ssi .  Donc et .    Non, en fait .  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Or, un polynôme est égal au polynôme nul si, et seulement si, tous ses coefficients sont nuls. On en déduit que ssi   donc ssi .  Donc et .       C'est ça !  Méthode 1: En calculant une base de  est linéaire et, pour tout ,   On écrit .  Alors est le polynôme , donc ssi   Et deux polynômes sont égaux ssi ils ont les mêmes coefficients:   On en déduit que, pour tout ,   Donc, pour tout , on peut trouver un antécédent tel que .   est surjective, donc et .  Méthode 2: Par le théorème du rang  On a , et le théorème du rang donne donc    Méthode 3: Image d'une base   est une base de , en particulier c'est une famille génératrice. Donc:   On vérifie que cette famille est libre: soient , on suppose que   Or, un polynôme est nul ssi ses coefficients sont nuls, donc on en déduit   Donc est libre: c'est une base de , et donc .     Non, on a en fait .  Méthode 1: En calculant une base de  est linéaire et, pour tout ,   On écrit .  Alors est le polynôme , donc ssi   Et deux polynômes sont égaux ssi ils ont les mêmes coefficients:   On en déduit que, pour tout ,   Donc, pour tout , on peut trouver un antécédent tel que .   est surjective, donc et .  Méthode 2: Par le théorème du rang  On a , et le théorème du rang donne donc    Méthode 3: Image d'une base   est une base de , en particulier c'est une famille génératrice. Donc:   On vérifie que cette famille est libre: soient , on suppose que   Or, un polynôme est nul ssi ses coefficients sont nuls, donc on en déduit   Donc est libre: c'est une base de , et donc .     Sélectionner les affirmations correctes.   est injective.  donc est injective.  est surjective.  donc est surjective.  est un isomorphisme linéaire  est injective, surjective, donc bijective, et linéaire. C'est un isomorphisme.  est un endomorphisme.  est linéaire et les espaces vectoriels de départ et d'arrivée de sont les mêmes. est un endomorphisme.      Exercice 3   On considère     est linéaire.   Posons (le vecteur nul de , c'est-à-dire le polynôme constant égal à 0). Alors pour tout donc , donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.      Exercice 4   On considère     est linéaire.   Si on prend on trouve:   et   donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .            C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   n'est pas injective.  Montrons que n'est pas injective. Prenons   Alors et donc n'est pas injective.  Mais attention: n'est pas linéaire, donc on ne peut pas dire que : le noyau est défini uniquement pour les applications linéaires.  est un isomorphisme linéaire  n'est pas injective, donc pas bijective. Et en plus, elle n'est pas linéaire. Donc ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire, donc n'est pas un endomorphisme.      Exercice 5   On rappelle que .  On considère l'application déterminant entre les e.v. et :     est linéaire.   On a, pour   et   donc   donc n'est pas linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   n'est pas injective.  Montrons que des matrices différentes peuvent avoir même déterminant. Prenons   Alors et donc n'est pas injective.  Mais attention: n'est pas linéaire, donc on ne peut pas dire que : le noyau est défini uniquement pour les applications linéaires.   est surjective.  Soit , cherchons un antécédent: une matrice telle que .   Tout réel a un antécédent par , donc est surjective.   est une bijection.  n'est pas injective, donc pas bijective.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes, et n'est pas linéaire, donc n'est pas un endomorphisme.      Exercice 6   On considère     est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.     On suppose ici .  Si est linéaire, donner et . Sinon, entrer .            C'est ça !  On a, pour ,   Donc ssi ses coefficients sont solutions du système homogène   donc   La matrice est une base de , qui est donc de dimension 1.     Non, on trouve en fait .  On a, pour ,   Donc ssi ses coefficients sont solutions du système homogène   donc   La matrice est une base de , qui est donc de dimension 1.       C'est ça !  est linéaire et on a, pour    Donc ssi le système suivant a des solutions:   Ce système a des solutions ssi , donc   On vérifie que la famille est libre:  Prenons et supposons que     est libre, donc c'est une base de .  On en déduit que .    Non, en fait .  est linéaire et on a, pour    Donc ssi le système suivant a des solutions:   Ce système a des solutions ssi , donc   On vérifie que la famille est libre:  Prenons et supposons que     est libre, donc c'est une base de .  On en déduit que .     On ne suppose plus que .  Sélectionner les affirmations correctes.   est injective.  Montrons que ce qui montrera que n'est pas injective.  Posons   Alors   Donc et , ce qui montre que n'est pas injective.  n'est pas surjective.  Montrons que .  Pour cela, considérons à nouveau la matrice   Supposons, par l'absurde, que . Alors il existe telle que   mais alors on aurait   ce qui donne .  donc , ce qui est une contradiction.  Donc , donc n'est pas surjective.  n'est pas un isomorphisme linéaire  n'est ni injective, ni surjective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes et est linéaire donc est un endomorphisme.      Exercice 7   On considère     est linéaire.   Si on prend , on trouve   et   donc   donc n'est pas linéaire.     On suppose ici .  Si est linéaire, donner et . Sinon, entrer .             C'est ça !     n'est pas linéaire.       C'est ça !    n'est pas linéaire.     Sélectionner les affirmations correctes.   n'est pas injective.  Remarquons que   alors que , donc n'est pas injective.  est surjective.   Remarquons que, pour tout , si on note , on a   donc, par exemple, la matrice   n'appartient pas à , donc f n'est pas surjective.  est bijective.  n'est ni injective, ni surjective, donc n'est pas bijective.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes, mais n'est pas linéaire donc est un endomorphisme.       Exercice 8   On considère     est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !  Soit . Alors on a   On en déduit que donc .    Non, en fait .  Soit . Alors on a   On en déduit que donc .       C'est ça !  Méthode 1: En calculant une base de  est linéaire, et on a, pour ,   donc .  De plus que la famille est libre, puisque c'esu une famille à deux vecteurs non colinéaires.  Donc c'est une base de et .   Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang,    Méthode 3 : Image d'une base  La base canonique de ,   est, en particulier, une famille génératrice. On a donc   Donc est une famille génératrice de .  Comme ces deux matrices ne sont pas colinéaires, c'est une famille libre.  Donc c'est une base de et .     Non, en fait on trouve .  Méthode 1: En calculant une base de  est linéaire, et on a, pour ,   donc .  De plus que la famille est libre, puisque c'esu une famille à deux vecteurs non colinéaires.  Donc c'est une base de et .   Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang,    Méthode 3 : Image d'une base  La base canonique de ,   est, en particulier, une famille génératrice. On a donc   Donc est une famille génératrice de .  Comme ces deux matrices ne sont pas colinéaires, c'est une famille libre.  Donc c'est une base de et .     Sélectionner les affirmations correctes.   n'est pas injective.  donc est injective.  est surjective.   Considérons la matrice .  Alors pour tout ,  donc .  Donc , autrement dit, n'est pas surjective.  n'est pas un isomorphisme.  est injective mais pas surjective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes donc n'est pas un endomorphisme.       Exercice 9   On considère     est linéaire   Soient . On calcule   On a donc bien   donc est linéaire.     Si est linéaire, donner et . Sinon, entrer .             C'est ça !  On a, pour ,   donc   On vérifie que la famille est libre: prenons et supposons que   est libre, donc c'est une base de Ker(f).  On en déduit que .    Non, en fait on trouve .  On a, pour ,   donc   On vérifie que la famille est libre: prenons et supposons que   est libre, donc c'est une base de Ker(f).  On en déduit que .       C'est ça !  Méthode 1: En calculant une base de  Soit , alors   ce qui implique que .  Réciproquement, si , alors il existe tel que et donc   On a trouvé un antécédent de par ,donc .  On en déduit que , et que .   Méthode 2 : Avec le théorème du rang  On a donc    Méthode 3: Image d'une base:  La base canonique de est   C'est en particulier une famille génératrice, donc   Donc est une famille génératrice de .  Mais elle n'est pas libre: en enlevant le vecteur nul et les vecteurs en double, on a en fait .  et, comme , est libre, donc c'est une base de . Et donc .    Non, en fait .  Méthode 1: En calculant une base de  Soit , alors   ce qui implique que .  Réciproquement, si , alors il existe tel que et donc   On a trouvé un antécédent de par ,donc .  On en déduit que , et que .   Méthode 2 : Avec le théorème du rang  On a donc    Méthode 3: Image d'une base:  La base canonique de est   C'est en particulier une famille génératrice, donc   Donc est une famille génératrice de .  Mais elle n'est pas libre: en enlevant le vecteur nul et les vecteurs en double, on a en fait .  et, comme , est libre, donc c'est une base de . Et donc .     Sélectionner les affirmations correctes.   est injective.  donc n'est pas injective.  n'est pas surjective.  donc n'est pas surjective.  est un isomorphisme linéaire  n'est ni injective, ni surjective, donc pas bijective. Ce n'est pas un isomorphisme.  n'est pas un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes donc n'est pas un endomorphisme.       Exercice 10   On considère     est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.     Sélectionner les affirmations correctes.   est injective.   n'est pas injective: puisqu'elle est linéaire, on va le faire en calculant son noyau. On a   Considérons par exemple la suite définie par   alors n'est pas la suite constante égale à 0: donc et pourtant , donc .   donc n'est pas injective .  est surjective.  donc est surjective. Montrons le en trouvant un antécédent pour chaque réel.  Soit . Alors   Considérons par exemple la suite définie par   alors donc . Donc i.e. f est surjective.   est un isomorphisme linéaire  est surjective, mais pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire donc n'est pas un endomorphisme.      Exercice 11   Soit   Bonus: Montrer que est un s.e.v. de .  On considère l'application     est linéaire   Soient . On calcule   On a donc bien   donc est linéaire.     Sélectionner les affirmations correctes.   est injective.   Puisque est linéaire, on va montrer que ce qui montera que n'est pas injective.  On a   Considérons par exemple la suite définie par   alors n'est pas la suite constante égale à 0: donc .  Et pourtant donc .  donc n'est pas injective.   est surjective.  Montrons que est surjective: soit , on cherche un antécédent de par . Or,   Considérons par exemple la suite définie par   alors donc . Donc , i.e. f est surjective.  est un isomorphisme linéaire  est surjective, mais pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes donc n'est pas un endomorphisme.       Exercice 12   On considère l'application linéaire      Donner la taille de la matrice qui représente dans les bases canoniques de et de .  Taille:       C'est ça !  est une application linéaire de de dans donc la matrice de (dans n'importe quelles bases) est de taille .      est une application linéaire de de dans donc la matrice de (dans n'importe quelles bases) est de taille .        Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   donc   Les coefficients de dans la base sont 0 et 2, et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve:   Et du coup pour   on a   on a d'une part   et d'autre part   On retrouve bien le même résultat.      On calcule   donc   Les coefficients de dans la base sont 0 et 2, et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve:   Et du coup pour   on a   on a d'une part   et d'autre part   On retrouve bien le même résultat.        Donner les coefficients de la première colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc , donc les coefficients de la deuxième colonne de sont -2 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: pour ça, il nous faut aussi la matrice de passage de à .  On l'obtient en écrivant, en colonne, les coordonnées des vecteurs de dans la base canonique:   ce qui donne   On a       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc , donc les coefficients de la deuxième colonne de sont -2 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: pour ça, il nous faut aussi la matrice de passage de à .  On l'obtient en écrivant, en colonne, les coordonnées des vecteurs de dans la base canonique:   ce qui donne   On a         Exercice 13   On considère l'application linéaire      Donner la taille de la matrice qui représente dans la base canonique de .  Taille:       C'est ça !  est un endomorphisme de donc la matrice de (dans n'importe quelles bases) est de taille .      est un endomorphisme de donc la matrice de (dans n'importe quelles bases) est de taille .        Donner les coefficients de la troisième colonne de la matrice qui représente dans la base canonique de .  On rappelle que    :       C'est ça !  On calcule   donc   Les coefficients de dans la base sont 0, -2 et 2 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le même résultat.      On calcule   donc   Les coefficients de dans la base sont 0, -2 et 2 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le même résultat.        Donner les coefficients de la troisième colonne de la matrice qui représente dans la base de , où    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux polynômes sont égaux ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la troisième colonne de sont 2, -1 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux polynômes sont égaux ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la troisième colonne de sont 2, -1 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a         Exercice 14   On considère l'application linéaire      Donner la taille de la matrice qui représente dans la base canonique de .  Taille:       C'est ça !  est un endomorphisme de donc la matrice de (dans n'importe quelle base) est de taille .      est un endomorphisme de donc la matrice de (dans n'importe quelle base) est de taille .        Donner les coefficients de la deuxième colonne de la matrice qui représente dans la base canonique de .  On rappelle que    :       C'est ça !  On calcule   Les coefficients de dans la base sont 0, 1,1 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.      On calcule   Les coefficients de dans la base sont 0, 1,1 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.        Donner les coefficients de la troisième colonne de la matrice qui représente dans la base de , où    :       C'est ça !  On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc , donc les coefficients de la troisième colonne de sont 0,0,2 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a       On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc , donc les coefficients de la troisième colonne de sont 0,0,2 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a         Exercice 15   On considère l'application linéaire      Donner la taille de la matrice qui représente dans les bases canoniques de et .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .        Donner les coefficients de la première colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   Les coefficients de dans la base sont 1, 1,0 et 0, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de en entier, on trouve   Et du coup on a, d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.      On calcule   Les coefficients de dans la base sont 1, 1,0 et 0, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de en entier, on trouve   Et du coup on a, d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.        Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la deuxième colonne de sont 2,-1,3 et -3.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. Pour ça, il nous faut aussi la matrice de passage de à , donnée par   On a       On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la deuxième colonne de sont 2,-1,3 et -3.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. Pour ça, il nous faut aussi la matrice de passage de à , donnée par   On a        "
},
{
  "id": "al1-recap_chap5_app-lin-10-2-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-2-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-2-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-2-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !  est linéaire; déterminons son noyau.  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Donc engendre et est libre, car ces deux polynômes ne sont pas colinéaires. Donc c'est une base de .  Donc .    Non, en fait .  est linéaire; reste à déterminer son noyau.  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Donc engendre et est libre, car ces deux polynômes ne sont pas colinéaires. Donc c'est une base de .  Donc .       C'est ça !  Méthode 1: Calcul d'une base de .  est linéaire et, pour tout ,   On en déduit que, pour tous réels,   Par exemple, en prenant on trouve   Tout a un (et même plusieurs) antécédents par .  Donc est surjective, donc , et donc    Méthode 2: Théorème du rang.  On a donc, par le théorème du rang,    Méthode 3: Image d'une base  La base canonique de est   C'est en particulier une famille génératrice, donc   donc est une famille génératrice de . Mais ce n'est pas une famille libre:   donc on a en fait   et ces deux vecteurs sot non colinéaires, donc forment une famille libre.  Donc est une base de , et donc .    Non, on a en fait .  Méthode 1: Calcul d'une base de .  est linéaire et, pour tout ,   On en déduit que, pour tous réels,   Par exemple, en prenant on trouve   Tout a un (et même plusieurs) antécédents par .  Donc est surjective, donc , et donc    Méthode 2: Théorème du rang.  On a donc, par le théorème du rang,    Méthode 3: Image d'une base  La base canonique de est   C'est en particulier une famille génératrice, donc   donc est une famille génératrice de . Mais ce n'est pas une famille libre:   donc on a en fait   et ces deux vecteurs sot non colinéaires, donc forment une famille libre.  Donc est une base de , et donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-10-2-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-2-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  donc n'est pas injective.  est surjective.  donc est surjective.  n'est pas un isomorphisme linéaire  n'est pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les différents donc n'est pas un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-10-3-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-3-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-3-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-3-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Or, un polynôme est égal au polynôme nul si, et seulement si, tous ses coefficients sont nuls. On en déduit que ssi   donc ssi .  Donc et .    Non, en fait .  Soit alors on peut écrire   et donc   En utilisant ça, on trouve   Or, un polynôme est égal au polynôme nul si, et seulement si, tous ses coefficients sont nuls. On en déduit que ssi   donc ssi .  Donc et .       C'est ça !  Méthode 1: En calculant une base de  est linéaire et, pour tout ,   On écrit .  Alors est le polynôme , donc ssi   Et deux polynômes sont égaux ssi ils ont les mêmes coefficients:   On en déduit que, pour tout ,   Donc, pour tout , on peut trouver un antécédent tel que .   est surjective, donc et .  Méthode 2: Par le théorème du rang  On a , et le théorème du rang donne donc    Méthode 3: Image d'une base   est une base de , en particulier c'est une famille génératrice. Donc:   On vérifie que cette famille est libre: soient , on suppose que   Or, un polynôme est nul ssi ses coefficients sont nuls, donc on en déduit   Donc est libre: c'est une base de , et donc .     Non, on a en fait .  Méthode 1: En calculant une base de  est linéaire et, pour tout ,   On écrit .  Alors est le polynôme , donc ssi   Et deux polynômes sont égaux ssi ils ont les mêmes coefficients:   On en déduit que, pour tout ,   Donc, pour tout , on peut trouver un antécédent tel que .   est surjective, donc et .  Méthode 2: Par le théorème du rang  On a , et le théorème du rang donne donc    Méthode 3: Image d'une base   est une base de , en particulier c'est une famille génératrice. Donc:   On vérifie que cette famille est libre: soient , on suppose que   Or, un polynôme est nul ssi ses coefficients sont nuls, donc on en déduit   Donc est libre: c'est une base de , et donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-10-3-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-3-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  donc est injective.  est surjective.  donc est surjective.  est un isomorphisme linéaire  est injective, surjective, donc bijective, et linéaire. C'est un isomorphisme.  est un endomorphisme.  est linéaire et les espaces vectoriels de départ et d'arrivée de sont les mêmes. est un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-4-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-4-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Posons (le vecteur nul de , c'est-à-dire le polynôme constant égal à 0). Alors pour tout donc , donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-4-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-4-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-5-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-5-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Si on prend on trouve:   et   donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-5-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-5-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .            C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-5-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-5-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   n'est pas injective.  Montrons que n'est pas injective. Prenons   Alors et donc n'est pas injective.  Mais attention: n'est pas linéaire, donc on ne peut pas dire que : le noyau est défini uniquement pour les applications linéaires.  est un isomorphisme linéaire  n'est pas injective, donc pas bijective. Et en plus, elle n'est pas linéaire. Donc ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire, donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-6-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-6-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   On a, pour   et   donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-6-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-6-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !    n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-6-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-6-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   n'est pas injective.  Montrons que des matrices différentes peuvent avoir même déterminant. Prenons   Alors et donc n'est pas injective.  Mais attention: n'est pas linéaire, donc on ne peut pas dire que : le noyau est défini uniquement pour les applications linéaires.   est surjective.  Soit , cherchons un antécédent: une matrice telle que .   Tout réel a un antécédent par , donc est surjective.   est une bijection.  n'est pas injective, donc pas bijective.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes, et n'est pas linéaire, donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-7-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-7-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-7-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-7-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " On suppose ici .  Si est linéaire, donner et . Sinon, entrer .            C'est ça !  On a, pour ,   Donc ssi ses coefficients sont solutions du système homogène   donc   La matrice est une base de , qui est donc de dimension 1.     Non, on trouve en fait .  On a, pour ,   Donc ssi ses coefficients sont solutions du système homogène   donc   La matrice est une base de , qui est donc de dimension 1.       C'est ça !  est linéaire et on a, pour    Donc ssi le système suivant a des solutions:   Ce système a des solutions ssi , donc   On vérifie que la famille est libre:  Prenons et supposons que     est libre, donc c'est une base de .  On en déduit que .    Non, en fait .  est linéaire et on a, pour    Donc ssi le système suivant a des solutions:   Ce système a des solutions ssi , donc   On vérifie que la famille est libre:  Prenons et supposons que     est libre, donc c'est une base de .  On en déduit que .   "
},
{
  "id": "al1-recap_chap5_app-lin-10-7-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-7-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " On ne suppose plus que .  Sélectionner les affirmations correctes.   est injective.  Montrons que ce qui montrera que n'est pas injective.  Posons   Alors   Donc et , ce qui montre que n'est pas injective.  n'est pas surjective.  Montrons que .  Pour cela, considérons à nouveau la matrice   Supposons, par l'absurde, que . Alors il existe telle que   mais alors on aurait   ce qui donne .  donc , ce qui est une contradiction.  Donc , donc n'est pas surjective.  n'est pas un isomorphisme linéaire  n'est ni injective, ni surjective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes et est linéaire donc est un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-8-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-8-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Si on prend , on trouve   et   donc   donc n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-8-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-8-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " On suppose ici .  Si est linéaire, donner et . Sinon, entrer .             C'est ça !     n'est pas linéaire.       C'est ça !    n'est pas linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-8-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-8-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   n'est pas injective.  Remarquons que   alors que , donc n'est pas injective.  est surjective.   Remarquons que, pour tout , si on note , on a   donc, par exemple, la matrice   n'appartient pas à , donc f n'est pas surjective.  est bijective.  n'est ni injective, ni surjective, donc n'est pas bijective.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes, mais n'est pas linéaire donc est un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-10-9-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-9-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-9-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-9-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !  Soit . Alors on a   On en déduit que donc .    Non, en fait .  Soit . Alors on a   On en déduit que donc .       C'est ça !  Méthode 1: En calculant une base de  est linéaire, et on a, pour ,   donc .  De plus que la famille est libre, puisque c'esu une famille à deux vecteurs non colinéaires.  Donc c'est une base de et .   Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang,    Méthode 3 : Image d'une base  La base canonique de ,   est, en particulier, une famille génératrice. On a donc   Donc est une famille génératrice de .  Comme ces deux matrices ne sont pas colinéaires, c'est une famille libre.  Donc c'est une base de et .     Non, en fait on trouve .  Méthode 1: En calculant une base de  est linéaire, et on a, pour ,   donc .  De plus que la famille est libre, puisque c'esu une famille à deux vecteurs non colinéaires.  Donc c'est une base de et .   Méthode 2: Avec le théorème du rang  On a donc par le théorème du rang,    Méthode 3 : Image d'une base  La base canonique de ,   est, en particulier, une famille génératrice. On a donc   Donc est une famille génératrice de .  Comme ces deux matrices ne sont pas colinéaires, c'est une famille libre.  Donc c'est une base de et .   "
},
{
  "id": "al1-recap_chap5_app-lin-10-9-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-9-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   n'est pas injective.  donc est injective.  est surjective.   Considérons la matrice .  Alors pour tout ,  donc .  Donc , autrement dit, n'est pas surjective.  n'est pas un isomorphisme.  est injective mais pas surjective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes donc n'est pas un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-10-10-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-10-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-10-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-10-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Si est linéaire, donner et . Sinon, entrer .             C'est ça !  On a, pour ,   donc   On vérifie que la famille est libre: prenons et supposons que   est libre, donc c'est une base de Ker(f).  On en déduit que .    Non, en fait on trouve .  On a, pour ,   donc   On vérifie que la famille est libre: prenons et supposons que   est libre, donc c'est une base de Ker(f).  On en déduit que .       C'est ça !  Méthode 1: En calculant une base de  Soit , alors   ce qui implique que .  Réciproquement, si , alors il existe tel que et donc   On a trouvé un antécédent de par ,donc .  On en déduit que , et que .   Méthode 2 : Avec le théorème du rang  On a donc    Méthode 3: Image d'une base:  La base canonique de est   C'est en particulier une famille génératrice, donc   Donc est une famille génératrice de .  Mais elle n'est pas libre: en enlevant le vecteur nul et les vecteurs en double, on a en fait .  et, comme , est libre, donc c'est une base de . Et donc .    Non, en fait .  Méthode 1: En calculant une base de  Soit , alors   ce qui implique que .  Réciproquement, si , alors il existe tel que et donc   On a trouvé un antécédent de par ,donc .  On en déduit que , et que .   Méthode 2 : Avec le théorème du rang  On a donc    Méthode 3: Image d'une base:  La base canonique de est   C'est en particulier une famille génératrice, donc   Donc est une famille génératrice de .  Mais elle n'est pas libre: en enlevant le vecteur nul et les vecteurs en double, on a en fait .  et, comme , est libre, donc c'est une base de . Et donc .   "
},
{
  "id": "al1-recap_chap5_app-lin-10-10-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-10-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.  donc n'est pas injective.  n'est pas surjective.  donc n'est pas surjective.  est un isomorphisme linéaire  n'est ni injective, ni surjective, donc pas bijective. Ce n'est pas un isomorphisme.  n'est pas un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes donc n'est pas un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-10-11-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-11-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire.   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-11-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-11-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.   n'est pas injective: puisqu'elle est linéaire, on va le faire en calculant son noyau. On a   Considérons par exemple la suite définie par   alors n'est pas la suite constante égale à 0: donc et pourtant , donc .   donc n'est pas injective .  est surjective.  donc est surjective. Montrons le en trouvant un antécédent pour chaque réel.  Soit . Alors   Considérons par exemple la suite définie par   alors donc . Donc i.e. f est surjective.   est un isomorphisme linéaire  est surjective, mais pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de sont les mêmes mais n'est pas linéaire donc n'est pas un endomorphisme.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-12-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-12-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": " est linéaire   Soient . On calcule   On a donc bien   donc est linéaire.   "
},
{
  "id": "al1-recap_chap5_app-lin-10-12-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-12-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": " Sélectionner les affirmations correctes.   est injective.   Puisque est linéaire, on va montrer que ce qui montera que n'est pas injective.  On a   Considérons par exemple la suite définie par   alors n'est pas la suite constante égale à 0: donc .  Et pourtant donc .  donc n'est pas injective.   est surjective.  Montrons que est surjective: soit , on cherche un antécédent de par . Or,   Considérons par exemple la suite définie par   alors donc . Donc , i.e. f est surjective.  est un isomorphisme linéaire  est surjective, mais pas injective, donc pas bijective. Ce n'est pas un isomorphisme.  est un endomorphisme.  Les espaces vectoriels de départ et d'arrivée de ne sont pas les mêmes donc n'est pas un endomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-10-13-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-13-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans les bases canoniques de et de .  Taille:       C'est ça !  est une application linéaire de de dans donc la matrice de (dans n'importe quelles bases) est de taille .      est une application linéaire de de dans donc la matrice de (dans n'importe quelles bases) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-10-13-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-13-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": "  Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   donc   Les coefficients de dans la base sont 0 et 2, et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve:   Et du coup pour   on a   on a d'une part   et d'autre part   On retrouve bien le même résultat.      On calcule   donc   Les coefficients de dans la base sont 0 et 2, et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans les bases et en entier, on trouve:   Et du coup pour   on a   on a d'une part   et d'autre part   On retrouve bien le même résultat.     "
},
{
  "id": "al1-recap_chap5_app-lin-10-13-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-13-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": "  Donner les coefficients de la première colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc , donc les coefficients de la deuxième colonne de sont -2 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: pour ça, il nous faut aussi la matrice de passage de à .  On l'obtient en écrivant, en colonne, les coordonnées des vecteurs de dans la base canonique:   ce qui donne   On a       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   donc , donc les coefficients de la deuxième colonne de sont -2 et 2.  Méthode 2: On utilise la matrice de passage de à :   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier: pour ça, il nous faut aussi la matrice de passage de à .  On l'obtient en écrivant, en colonne, les coordonnées des vecteurs de dans la base canonique:   ce qui donne   On a      "
},
{
  "id": "al1-recap_chap5_app-lin-10-14-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-14-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans la base canonique de .  Taille:       C'est ça !  est un endomorphisme de donc la matrice de (dans n'importe quelles bases) est de taille .      est un endomorphisme de donc la matrice de (dans n'importe quelles bases) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-10-14-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-14-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": "  Donner les coefficients de la troisième colonne de la matrice qui représente dans la base canonique de .  On rappelle que    :       C'est ça !  On calcule   donc   Les coefficients de dans la base sont 0, -2 et 2 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le même résultat.      On calcule   donc   Les coefficients de dans la base sont 0, -2 et 2 et ce sont donc les coefficients de la troisième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le même résultat.     "
},
{
  "id": "al1-recap_chap5_app-lin-10-14-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-14-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": "  Donner les coefficients de la troisième colonne de la matrice qui représente dans la base de , où    :       C'est ça !  On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux polynômes sont égaux ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la troisième colonne de sont 2, -1 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a       On calcule   Ce n'est pas fini: il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux polynômes sont égaux ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la troisième colonne de sont 2, -1 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a      "
},
{
  "id": "al1-recap_chap5_app-lin-10-15-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-15-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans la base canonique de .  Taille:       C'est ça !  est un endomorphisme de donc la matrice de (dans n'importe quelle base) est de taille .      est un endomorphisme de donc la matrice de (dans n'importe quelle base) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-10-15-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-15-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": "  Donner les coefficients de la deuxième colonne de la matrice qui représente dans la base canonique de .  On rappelle que    :       C'est ça !  On calcule   Les coefficients de dans la base sont 0, 1,1 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.      On calcule   Les coefficients de dans la base sont 0, 1,1 et 0 et ce sont donc les coefficients de la deuxième colonne de .  Remarque: si on calcule la matrice de dans la base en entier, on trouve   Et du coup pour   on a d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.     "
},
{
  "id": "al1-recap_chap5_app-lin-10-15-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-15-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": "  Donner les coefficients de la troisième colonne de la matrice qui représente dans la base de , où    :       C'est ça !  On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc , donc les coefficients de la troisième colonne de sont 0,0,2 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a       On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc , donc les coefficients de la troisième colonne de sont 0,0,2 et 0.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la troisième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. On a      "
},
{
  "id": "al1-recap_chap5_app-lin-10-16-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-16-3",
  "type": "Exercise",
  "number": "8.1",
  "title": "",
  "body": "  Donner la taille de la matrice qui représente dans les bases canoniques de et .  Taille:       C'est ça !  est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .      est une application linéaire de dans donc la matrice de (dans n'importe quelle base) est de taille .     "
},
{
  "id": "al1-recap_chap5_app-lin-10-16-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-16-4",
  "type": "Exercise",
  "number": "8.2",
  "title": "",
  "body": "  Donner les coefficients de la première colonne de la matrice qui représente dans les bases canoniques de et de .  On rappelle que   et    :       C'est ça !  On calcule   Les coefficients de dans la base sont 1, 1,0 et 0, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de en entier, on trouve   Et du coup on a, d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.      On calcule   Les coefficients de dans la base sont 1, 1,0 et 0, et ce sont donc les coefficients de la première colonne de .  Remarque: si on calcule la matrice de en entier, on trouve   Et du coup on a, d'une part   et d'autre part   ce qui dit que   et on retrouve bien le résultat précédent.     "
},
{
  "id": "al1-recap_chap5_app-lin-10-16-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-10.html#al1-recap_chap5_app-lin-10-16-5",
  "type": "Exercise",
  "number": "8.3",
  "title": "",
  "body": "  Donner les coefficients de la deuxième colonne de la matrice qui représente dans les bases de et de , où   et    :       C'est ça !  On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la deuxième colonne de sont 2,-1,3 et -3.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. Pour ça, il nous faut aussi la matrice de passage de à , donnée par   On a       On calcule   Il faut maintenant calculer les coordonnées de dans la base .  Méthode 1: On cherche tels que ce qui donne   Or, deux matrices sont égales ssi leurs coefficients sont égaux: on a donc   d'où finalement   donc donc les coefficients de la deuxième colonne de sont 2,-1,3 et -3.  Méthode 2: On utilise la matrice de passage de à .  On la trouve en écrivant en colonne les coordonnées des vecteurs de dans la base canonique:   ce qui donne   Alors les coordonnées de dans la base sont données par   Ce qui donne la deuxième colonne de .  Méthode 3: On peut utiliser la formule de changement de base pour calculer en entier. Pour ça, il nous faut aussi la matrice de passage de à , donnée par   On a      "
},
{
  "id": "al1-recap_chap5_app-lin-11",
  "level": "1",
  "url": "al1-recap_chap5_app-lin-11.html",
  "type": "Section",
  "number": "9",
  "title": "— Erreurs à ne pas faire",
  "body": " Erreurs à ne pas faire   Cherchez l'erreur   Cliquez sur les parties de la réponse qui posent problème.  Notamment, vous pouvez signaler les implications ou les équivalences qui ne fonctionnent pas, en cliquant sur \"donc\" ou sur \" \":  Par exemple, si je dis \"1+1=2 donc A est une lettre de l'alphabet\", ce qui pose problème, ce n'est pas \"1+1=2\" ou \"A est une lettre de l'alphabet\" (ça, c'est vrai); ce qui pose problème, c'est le \"donc\".     Question: On définit la fonction    Montrer que est un endomorphisme.  Trouver une base et la dimension du noyau de .      Réponse:    est définie sur et, pour tout , on a .  Donc  , et donc  est un endomorphisme.  On sait que  donc            On trouve que .  Donc  est une base de .  Il y a trois vecteurs dans la base, donc  .       Il est exact que est définie sur , à valeurs dans ; est une fonction .  Mais ça ne suffit pas pour conclure que est un endomorphisme ! Il faut aussi montrer que est linéaire .  Pour cela, on prend et , et on calcule   donc est linéaire: c'est un endomorphisme de .  Il est aussi tout à fait juste que , donc, pour déterminer , on cherche les tels que . Et donc on cherche les solutions du système   qui est en effet équivalent à tout court.  Par contre, ce n'est pas du tout équivalent à   car cette égalité se réécrit : non seulement ça ne donne pas l'équation qui nous intéresse, mais en plus le vecteur ne peut pas être égal au réel .  De plus, même si on obtenait effectivement , on en déduirait alors que , et donc que . Mais on n'en déduirait pas que .  Une autre objection: Même si on obtenait , on en déduit que est une famille génératrice de , mais pour conclure que c'est une base, il faudrait aussi montrer que c'est une famille libre ce qui, en l'occurrence, est bien le cas .  En plus, si on avait effectivement , alors, comme est une base de , on aurait en fait . Autrement dit, pour tout , on aurait , et ce n'est pas le cas: n'est pas la fonction nulle.   Alors, comment fait-on ?  Repartons de la dernière étape correcte: on a   On obtient donc que .  Donc est une famille génératrice de . De plus, c'est une famille à deux vecteurs non colinéaires, donc c'est une famille libre.  Donc est une base de et .        Question: On considère l'endomorphisme    Déterminer .  Est-ce que est un isomorphisme ?      Réponse 1:   On sait que  donc                L'ensemble des solutions est : il y a une infinité de solutions .  Donc .  On a obtenu que est infini  donc  .   Donc,  est surjective , et, comme est un endomorphisme , on peut en déduire que est bijective .  est linéaire  et bijective  donc  c'est un isomorphisme.      Il est faux que : tout d'abord, dans cette expression, on ne sait pas qui est .  Et de plus, cette définition est \"à l'envers\": contient, non pas les auxquels on applique , mais les qui sont images par d'un (ou plusieurs) vecteurs de . contient les images , pas les antécédents .  Ou, pour le dire plus précisément,   Autrement dit,    Du coup, il s'agit effectivement d'étudier l'équation : mais la question qu'on se pose, ce n'est pas \"quels sont les tels que \" mais \"quels sont les pour lesquels on peut trouver un antécédent \".  Ecrivons ça mathématiquement:   Pour savoir si un système a des solutions, on l'échelonne: l'échelonnage du système dans la réponse ci-dessus est impeccable. On trouve en effet   A ce stade, le système est échelonné: il a trois inconnues principales, aucune inconnue libre et aucune ligne \"0 = Truc\" qui pourrait être contradictoire.  Ce système a donc une unique solution, quel que soit .  Remarque: Comme ce qu'on veut savoir, c'est si le système a des solutions, on n'est pas obligés de finir de le résoudre.  Si on le fait, on trouve effectivement   ce qui nous donne l' antécédent de par :   Par exemple, l'antécédent de est , autrement dit   Du coup, ce qu'on trouve, c'est que tout admet un antécédent par , donc .  A nouveau, contient les pour lequels le système a une solution, pas les solutions du système.   A ce sujet, un commentaire sur la fin de la réponse: si on trouve que est infini, on ne peut pas en déduire directement que .  Par exemple, si on reprend l'application de l'exercice précédent, on trouve Montrez-le !    est infini, mais n'est pas égal à .   La réponse à la deuxième question, par contre, est tout à fait juste: une fois qu'on a obtenu que , on en déduit que est surjective. Et, de là, on sait que comme est un endomorphisme ,  est injective  est bijective  est surjective . Donc on peut en effet en déduire que est linéaire bijective, et c'est donc un isomorphisme.       Question: On considère l'endomorphisme    Déterminer .  Est-ce que est un isomorphisme ?      Réponse 2:   On a      Donc  La famille engendre  donc  c'est une base de .   Donc,   donc  est surjective .  Vérifions si est injective: on doit déterminer si .  Or,         Donc , donc est injective.   En fin de compte, est linéaire  et bijective  donc  c'est un isomorphisme.      Ici, l'idée générale n'est pas mauvaise, mais on ne peut pas l'expliquer comme ça:  Tout d'abord, est un ensemble, et il ne peut pas être égal à un vecteur de  .  Et de plus, on ne sait pas qui est ce vecteur : qui sont et dans cette égalité ?  L'idée, bien sûr, c'est que contient toutes les images de vecteurs par , autrement dit tous les vecteurs du \"type\" .  Donc on pourrait écrire plutôt    Du coup, on a   On trouve donc effectivement   Pour résumer, c'est vrai que   et que   mais par contre   et   Et donc, on obtient que est une famille génératrice de .  Mais pour en déduire que c'est une base, il faut qu'on vérifie si c'est une famille libre.  Pour cela, on prend et on suppose que   ce qui équivaut à   Donc est une famille libre, et donc c'est bien une base de .   Mais du coup, . Mais est un s.e.v. de donc on en déduit en fait que .  Du coup, on trouve en effet que est surjective.  Pour montrer qu'elle est aussi injective, on aurait pu utiliser le théorème du rang, mais on peut aussi le faire à la main: la résolution donnée dans la réponse est très bien, et on trouve en effet   Mais attention, \" \" est incorrect: est un ensemble, pas un vecteur. On a en fait Ca peut sembler exagérément tatillon, mais c'est une bonne habitude d'être attentif au type d'objet mathématique qui correspond aux notations: ensemble, fonction, etc. Ca permet de vérifier que le résultat obtenu a un sens. .  Enfin, on en déduit en effet que est injective, et comme elles est aussi surjective et linéaire, c'est un isomorphisme.       Question: On considère l'endomorphisme    Déterminer .  Est-ce que est un isomorphisme ?      Réponse 3:   On sait que, si on prend une base de , alors , autrement dit est une base de .  Si on fait ça avec la base canonique de , on a donc  , ,  Donc , et on sait que  est une base de .  On a trouvé que    .  Donc .  Mais du coup, par le théorème du rang   Donc   Donc  est injective , et, comme est un endomorphisme , on peut en déduire que est bijective .  est linéaire  et bijective  donc  c'est un isomorphisme.      C'est tout à fait vrai que, si est une base, alors engendre .  Mais on ne peut pas en déduire directement que c'est une base de : pour ça, il faut vérifier que c'est une famille libre.   Le plus simple, c'est en effet de faire ça avec la base canonique de , qui est bien .  Et on trouve effectivement     On obtient donc que est une famille génératrice de .  Mais on ne peut pas en déduire que c'est une base de sans vérifier que c'est une famille libre !  Par exemple, si on prend la fonction , on trouve   Donc , mais n'est pas une famille libre, donc ce n'est pas une base de .  Revenons à notre fonction : là, on vérifie que est bien une famille libre voir correction de l'exercice ci-dessus, ou mieux, écrivez-le ! , et donc c'est bien une base de \\Im(f).   On trouve en effet que , et on en déduit, à l'aide du théorème du rang, que . On peut en déduire que est injective, et, comme est un endomorphisme ,  est injective  est bijective  est surjective  et donc est un isomorphisme: ce raisonnement marche très bien.   Il y a quand même une objection: \" \", ça n'existe pas: la dimension n'est définie que pour les espaces et sous-espaces vectoriels, pas pour les familles de vecteurs. Oui, je sais, ça ressemble à du coupage de cheveux en 4, mais même si on voit ce que vous voulez dire , c'est une bonne habitude de faire attention à ce genre de détails: ça permet de repérer ses propres erreurs ! .  On dit plus poliment:        "
},
{
  "id": "al1-recap_chap5_app-lin-11-2-3",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-11.html#al1-recap_chap5_app-lin-11-2-3",
  "type": "Exercise",
  "number": "9.1",
  "title": "",
  "body": "  Question: On définit la fonction    Montrer que est un endomorphisme.  Trouver une base et la dimension du noyau de .      Réponse:    est définie sur et, pour tout , on a .  Donc  , et donc  est un endomorphisme.  On sait que  donc            On trouve que .  Donc  est une base de .  Il y a trois vecteurs dans la base, donc  .       Il est exact que est définie sur , à valeurs dans ; est une fonction .  Mais ça ne suffit pas pour conclure que est un endomorphisme ! Il faut aussi montrer que est linéaire .  Pour cela, on prend et , et on calcule   donc est linéaire: c'est un endomorphisme de .  Il est aussi tout à fait juste que , donc, pour déterminer , on cherche les tels que . Et donc on cherche les solutions du système   qui est en effet équivalent à tout court.  Par contre, ce n'est pas du tout équivalent à   car cette égalité se réécrit : non seulement ça ne donne pas l'équation qui nous intéresse, mais en plus le vecteur ne peut pas être égal au réel .  De plus, même si on obtenait effectivement , on en déduirait alors que , et donc que . Mais on n'en déduirait pas que .  Une autre objection: Même si on obtenait , on en déduit que est une famille génératrice de , mais pour conclure que c'est une base, il faudrait aussi montrer que c'est une famille libre ce qui, en l'occurrence, est bien le cas .  En plus, si on avait effectivement , alors, comme est une base de , on aurait en fait . Autrement dit, pour tout , on aurait , et ce n'est pas le cas: n'est pas la fonction nulle.   Alors, comment fait-on ?  Repartons de la dernière étape correcte: on a   On obtient donc que .  Donc est une famille génératrice de . De plus, c'est une famille à deux vecteurs non colinéaires, donc c'est une famille libre.  Donc est une base de et .     "
},
{
  "id": "al1-recap_chap5_app-lin-11-2-4",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-11.html#al1-recap_chap5_app-lin-11-2-4",
  "type": "Exercise",
  "number": "9.2",
  "title": "",
  "body": "  Question: On considère l'endomorphisme    Déterminer .  Est-ce que est un isomorphisme ?      Réponse 1:   On sait que  donc                L'ensemble des solutions est : il y a une infinité de solutions .  Donc .  On a obtenu que est infini  donc  .   Donc,  est surjective , et, comme est un endomorphisme , on peut en déduire que est bijective .  est linéaire  et bijective  donc  c'est un isomorphisme.      Il est faux que : tout d'abord, dans cette expression, on ne sait pas qui est .  Et de plus, cette définition est \"à l'envers\": contient, non pas les auxquels on applique , mais les qui sont images par d'un (ou plusieurs) vecteurs de . contient les images , pas les antécédents .  Ou, pour le dire plus précisément,   Autrement dit,    Du coup, il s'agit effectivement d'étudier l'équation : mais la question qu'on se pose, ce n'est pas \"quels sont les tels que \" mais \"quels sont les pour lesquels on peut trouver un antécédent \".  Ecrivons ça mathématiquement:   Pour savoir si un système a des solutions, on l'échelonne: l'échelonnage du système dans la réponse ci-dessus est impeccable. On trouve en effet   A ce stade, le système est échelonné: il a trois inconnues principales, aucune inconnue libre et aucune ligne \"0 = Truc\" qui pourrait être contradictoire.  Ce système a donc une unique solution, quel que soit .  Remarque: Comme ce qu'on veut savoir, c'est si le système a des solutions, on n'est pas obligés de finir de le résoudre.  Si on le fait, on trouve effectivement   ce qui nous donne l' antécédent de par :   Par exemple, l'antécédent de est , autrement dit   Du coup, ce qu'on trouve, c'est que tout admet un antécédent par , donc .  A nouveau, contient les pour lequels le système a une solution, pas les solutions du système.   A ce sujet, un commentaire sur la fin de la réponse: si on trouve que est infini, on ne peut pas en déduire directement que .  Par exemple, si on reprend l'application de l'exercice précédent, on trouve Montrez-le !    est infini, mais n'est pas égal à .   La réponse à la deuxième question, par contre, est tout à fait juste: une fois qu'on a obtenu que , on en déduit que est surjective. Et, de là, on sait que comme est un endomorphisme ,  est injective  est bijective  est surjective . Donc on peut en effet en déduire que est linéaire bijective, et c'est donc un isomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-11-2-5",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-11.html#al1-recap_chap5_app-lin-11-2-5",
  "type": "Exercise",
  "number": "9.3",
  "title": "",
  "body": "  Question: On considère l'endomorphisme    Déterminer .  Est-ce que est un isomorphisme ?      Réponse 2:   On a      Donc  La famille engendre  donc  c'est une base de .   Donc,   donc  est surjective .  Vérifions si est injective: on doit déterminer si .  Or,         Donc , donc est injective.   En fin de compte, est linéaire  et bijective  donc  c'est un isomorphisme.      Ici, l'idée générale n'est pas mauvaise, mais on ne peut pas l'expliquer comme ça:  Tout d'abord, est un ensemble, et il ne peut pas être égal à un vecteur de  .  Et de plus, on ne sait pas qui est ce vecteur : qui sont et dans cette égalité ?  L'idée, bien sûr, c'est que contient toutes les images de vecteurs par , autrement dit tous les vecteurs du \"type\" .  Donc on pourrait écrire plutôt    Du coup, on a   On trouve donc effectivement   Pour résumer, c'est vrai que   et que   mais par contre   et   Et donc, on obtient que est une famille génératrice de .  Mais pour en déduire que c'est une base, il faut qu'on vérifie si c'est une famille libre.  Pour cela, on prend et on suppose que   ce qui équivaut à   Donc est une famille libre, et donc c'est bien une base de .   Mais du coup, . Mais est un s.e.v. de donc on en déduit en fait que .  Du coup, on trouve en effet que est surjective.  Pour montrer qu'elle est aussi injective, on aurait pu utiliser le théorème du rang, mais on peut aussi le faire à la main: la résolution donnée dans la réponse est très bien, et on trouve en effet   Mais attention, \" \" est incorrect: est un ensemble, pas un vecteur. On a en fait Ca peut sembler exagérément tatillon, mais c'est une bonne habitude d'être attentif au type d'objet mathématique qui correspond aux notations: ensemble, fonction, etc. Ca permet de vérifier que le résultat obtenu a un sens. .  Enfin, on en déduit en effet que est injective, et comme elles est aussi surjective et linéaire, c'est un isomorphisme.    "
},
{
  "id": "al1-recap_chap5_app-lin-11-2-6",
  "level": "2",
  "url": "al1-recap_chap5_app-lin-11.html#al1-recap_chap5_app-lin-11-2-6",
  "type": "Exercise",
  "number": "9.4",
  "title": "",
  "body": "  Question: On considère l'endomorphisme    Déterminer .  Est-ce que est un isomorphisme ?      Réponse 3:   On sait que, si on prend une base de , alors , autrement dit est une base de .  Si on fait ça avec la base canonique de , on a donc  , ,  Donc , et on sait que  est une base de .  On a trouvé que    .  Donc .  Mais du coup, par le théorème du rang   Donc   Donc  est injective , et, comme est un endomorphisme , on peut en déduire que est bijective .  est linéaire  et bijective  donc  c'est un isomorphisme.      C'est tout à fait vrai que, si est une base, alors engendre .  Mais on ne peut pas en déduire directement que c'est une base de : pour ça, il faut vérifier que c'est une famille libre.   Le plus simple, c'est en effet de faire ça avec la base canonique de , qui est bien .  Et on trouve effectivement     On obtient donc que est une famille génératrice de .  Mais on ne peut pas en déduire que c'est une base de sans vérifier que c'est une famille libre !  Par exemple, si on prend la fonction , on trouve   Donc , mais n'est pas une famille libre, donc ce n'est pas une base de .  Revenons à notre fonction : là, on vérifie que est bien une famille libre voir correction de l'exercice ci-dessus, ou mieux, écrivez-le ! , et donc c'est bien une base de \\Im(f).   On trouve en effet que , et on en déduit, à l'aide du théorème du rang, que . On peut en déduire que est injective, et, comme est un endomorphisme ,  est injective  est bijective  est surjective  et donc est un isomorphisme: ce raisonnement marche très bien.   Il y a quand même une objection: \" \", ça n'existe pas: la dimension n'est définie que pour les espaces et sous-espaces vectoriels, pas pour les familles de vecteurs. Oui, je sais, ça ressemble à du coupage de cheveux en 4, mais même si on voit ce que vous voulez dire , c'est une bonne habitude de faire attention à ce genre de détails: ça permet de repérer ses propres erreurs ! .  On dit plus poliment:      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
