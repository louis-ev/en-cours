module.exports = (function() {
  // Ready translated locale messages
  const messages = {
    fr: {
      ascending: 'Croissant',
      descending: 'Décroissant',
      create_a_project: 'Créer un projet',
      create_a_publication: 'Créer une publication',
      publication: 'Publication',
      name: 'Nom',
      project_name: 'Nom du projet',
      created_date: 'Date de création',
      uploaded: 'Importation',
      created: 'Création',
      edited: 'Édition',
      sent_date: 'Date d’envoi',
      for_the_placement_on_timeline: '(pour le placement sur la timeline)',
      type: 'Type',
      color: 'Couleur',
      keywords: 'Mots-clés',
      author: 'Auteur(s)',
      download: 'Télécharger',
      caption: 'Légende',
      smoothing: 'Lissage',
      onion_skin: 'transparence de la dernière image',
      'file:': 'Fichier&nbsp;:',
      add_to_project: 'Ajouter au projet&nbsp;:',
      input_password: 'Renseigner le mot de passe ci-dessous :',
      validate_with_enter: 'valider avec la touche ENTRÉE',

      bytes: 'octets',
      kb: 'ko',
      mb: 'Mo',
      gb: 'Go',
      duration: 'Durée',

      date: 'Date',
      portrait: 'Portrait',
      nfc_tag: 'Tag NFC',
      cancel: 'Annuler',
      back: 'Retour',
      sureToRemoveAuthor: 'Êtes-vous sûr de vouloir supprimer cet auteur ?',
      sureToCloseModal: 'Êtes-vous sûr de vouloir fermer cette fenêtre ?',
      sureToRemovePubli:
        'Êtes-vous sûr de vouloir supprimer cette publication ?',
      sure_to_cancel_stopmotion:
        'Êtes-vous sûr de vouloir supprimer cette animation ?',
      validate_media: 'Valider le média',
      add_keyword: 'Ajouter un mot-clé',

      showing: 'Affichage de',
      media_filter: 'Filtre de médias',
      no_projects_yet:
        'Il n’y a pas encore de projet, créez-en un pour commencer à utiliser do•doc !',
      projects_of: 'projets sur',
      medias_of: 'médias sur',
      projects: 'Projets',
      project: 'Projet',
      medias: 'Médias',
      media: 'Média',
      authors: 'Auteurs',
      authors_list: 'Liste des auteurs',
      create_an_author: 'Créer un auteur',
      favorite_medias: 'Média favoris',
      all_medias: 'Tous les médias',
      create_text: 'Écrire',
      import: 'Importer',
      import_all_files: 'Importer tous les fichiers',
      import_medias: 'Importer des médias',
      select_files_to_import: 'Sélectionner les fichiers à importer',
      select_cover_image: 'Sélectionner une image de couverture',
      select_portrait_image: 'Sélectionner une image de portrait',
      add_to_publication: 'Ajouter à la publication',
      add_a_page: 'Ajouter une page',
      insert_a_page_here: 'Insérer une page ici',
      remove_this_page: '▲ Supprimer cette page ▲',

      made_with_dodoc:
        'Page web réalisée avec l’application libre et gratuite do•doc',

      loading: 'chargement',
      open: 'Ouvrir',
      save: 'Enregistrer',
      as_favorite: '+ favoris',
      edit: 'Éditer',
      width: 'Largeur',
      height: 'Hauteur',
      zoom: 'Zoom',
      settings: 'Règlages',
      print: 'Imprimer',
      create: 'Créer',
      remove: 'Supprimer',
      password: 'Mot de passe',
      protected_by_pass: 'protégé par mot de passe',
      password_instructions:
        'Si existant, seul les utilisateurs possédant ce mot de passe pourront modifier ce projet.',

      sort_by: 'Organiser par',
      in_the_order: 'Dans l’ordre',
      public: 'Public',
      fav: 'Favoris',
      content: 'Contenu',
      edit: 'Modifier',

      'lang:': 'Changer la langue&nbsp;:',
      lang: 'Changer la langue',

      photo: 'photo',
      video: 'vidéo',
      stopmotion: 'animation',
      audio: 'son',
      vecto: 'formes',
      image: 'image',
      text: 'texte',
      document: 'document',
      other: 'autre',
      with_sound: 'avec le son',
      generate: 'Générer',

      select: 'Sélectionner',
      unselect: 'Dé-sélectionner',

      toconnectwithanotherdevice:
        'Pour accéder à cet élément avec un autre appareil, connectez vous au même réseau wifi puis entrez l’url suivante dans un navigateur web, ou bien scannez le code QR&nbsp;: ',
      sureToRemoveProject: 'Êtes-vous sûr de vouloir supprimer ce projet ?',
      sureToRemoveMedia: 'Êtes-vous sûr de vouloir supprimer ce média ?',

      edit_the_media: 'Éditer le média',
      edit_project: 'Éditer le projet',

      capture: 'Enregistrer',
      current: 'Actuellement',
      currently: 'Actuellement',
      update: 'Mettre à jour',

      more_information:
        'Pour plus d’information, consultez la <a href="https://latelier-des-chercheurs.fr/docs/manuel-dodoc" class="js--openInBrowser" target="_blank">documentation</a> ou <a href="mailto:info@latelier-des-chercheurs.fr?subject=do•doc" class="js--openInBrowser" target="_blank">contactez</a> les auteurs de ce logiciel.',
      no_media_in_folder: 'Aucun média dans ce dossier.',
      no_public_media_in_folder: 'Aucun média public dans ce dossier.',
      auto_scroll: 'défilement<br>automatique',
      scale: 'échelle&nbsp;:',
      scale_items: {
        second: 'sec',
        minute: 'min',
        hour: 'h',
        half_day: '½j',
        day: 'j'
      },
      contents_are_stored: 'Les contenus de ce dossier sont enregistrés dans ',
      folder_information: 'Informations du dossier',
      calendar: 'Calendrier',
      now: 'en ce moment',
      list: 'Liste',
      fullscreen: 'Plein écran',
      preview: 'Aperçu',
      filter: 'Filtre',
      filters: 'Filtres',
      header_left: 'En-tête gauche',
      header_right: 'En-tête droite',
      gridstep: 'Pas de la grille d’alignement',
      margin_top: 'Marge: haut',
      margin_left: 'Marge: gauche',
      margin_right: 'Marge: droite',
      margin_bottom: 'Marge: bas',
      number_of_medias: 'Nombre de médias',
      number_of_pages: 'Nombre de pages',

      export_folder: 'Exporter en format WEB',
      export: 'Exporter',
      export_as_pdf: 'Export PDF',
      new_window: 'Nouvelle fenêtre',
      export_video_instructions:
        'Cliquez sur le bouton pour lancer la création d’une seule vidéo à partir des vidéos ajoutéez à la publication.',
      make_video: 'Fabriquer une vidéo',
      creation_in_progress: 'En cours de création…',

      publication_list: 'Liste des publications',
      export_publication: 'Exportation d’une publication',
      get_pdf:
        'Pour récupérer un PDF de cette publication (par exemple pour l’imprimer), cliquez sur le bouton ci-dessous&nbsp;:',
      download_pdf: 'Télécharger un PDF',
      get_website:
        'Pour récupérer un site web contenant cette publication (par exemple pour la diffuser en ligne), cliquez sur le bouton ci-dessous&nbsp;:',
      download_website: 'Télécharger une version web',
      pdf_created: 'Le PDF a été créé',
      video_created: 'La vidéo a été créée',
      open_in_app: 'Afficher',
      format: 'Format',
      template: 'Gabarit',
      standard: 'Standard',
      'feuille de choux': 'Feuille de Choux',
      'human tech days': 'Human Tech Days',
      page_by_page: 'Document page à page',
      video_assemblage: 'Montage vidéo',
      web: 'Page web',

      last_modified: 'Dernière modification',
      remote_access: 'Accès depuis d’autres appareils',
      img_per_second: 'Images par seconde',
      sent: 'Envoyé',

      notifications: {
        ios_not_compatible_with_capture:
          'Les iPhones et les iPads ne sont pas compatibles avec la fonctionnalité de Capture.',
        instead_import_with_this_button:
          'Utilisez plutôt la fonctionnalité d’import ci-dessus pour prendre des photos et des vidéos ou en importer depuis votre appareil.',
        media_was_sent: 'Le média a été envoyé.',
        media_couldnt_been_sent:
          'Le média n’a pas pu être envoyé à cause d’une erreur de connexion.',
        file_was_sent: 'Le fichier a été envoyé.',
        file_upload_not_allowed:
          'Votre navigateur web ne prend pas en charge l’envoi de fichiers.',
        connection_active: 'La connexion au serveur est active.',
        connection_lost: 'La connexion au serveur a été perdue.',
        contents_wont_be_editable:
          'Les modifications et ajouts ne seront plus pris en compte.',
        connection_error: 'La connexion au serveur n’a pu se faire.',
        'wrong_password_for_folder:':
          'Le password n’est pas le bon pour le dossier&nbsp;:',
        'created_edited_media:':
          'Création ou édition d’un média pour le dossier&nbsp;:',
        project_name_exists:
          'Ce nom de projet existe déjà, utilisez-en un autre.',
        publi_name_exists:
          'Ce nom de publication existe déjà, utilisez-en un autre.',
        author_name_exists:
          'Ce nom d’auteur existe déjà, utilisez-en un autre.',
        folder_name_needs_alphanumeric_characters:
          'Les noms de dossier doivent contenir au moins un caractère alphanumérique.',
        'failed_to_get_folder:': 'Le dossier suivant n’a pas été trouvé:',
        failed_to_start_video_change_source_or_res:
          'Le flux vidéo n’a pas pu être démarré.\nEssayez de modifier la source ou la résolution dans les réglages.',
        video_source_not_set: 'La source vidéo n’a pas été trouvée.',
        failed_to_start_audio_change_source:
          'Le flux audio n’a pas pu être démarré.\nEssayez de modifier la source dans les réglages.',
        audio_source_not_set: 'La source audio n’a pas été trouvée.',
        video_stream_not_available:
          'Erreur : le flux vidéo n’est pas disponible.',
        no_content_found_with_nfc_tag:
          'Scan d’un tag NFC réussi, associez-lui un auteur ou un média pour commencer.',
        author_found_with_nfc_tag:
          'Scan d’un tag NFC réussi, activation de l’auteur suivant&nbsp;:',
        medias_uploaded: 'Tous les médias ont bien étés envoyés.',
        medias_upload_failed:
          'Erreur&nbsp;: certains médias n’ont pas pu être envoyés.',
        video_converted: 'La vidéo a été convertie et ajoutée au projet.'
      }
    },
    en: {
      ascending: 'Ascending',
      descending: 'Descending',
      create_a_project: 'Create a project',
      create_a_publication: 'Create a publication',
      name: 'Name',
      project_name: 'Project name',
      created_date: 'Created date',
      uploaded: 'Uploaded',
      created: 'Created',
      edited: 'Edited',
      sent_date: 'Sent date',
      for_the_placement_on_timeline: '(used for the position on the timeline)',
      type: 'Type',
      color: 'Color',
      keywords: 'Keywords',
      author: 'Author(s)',
      download: 'Download',
      caption: 'Caption',
      date: 'Date',
      smoothing: 'smoothing',
      onion_skin: 'transparency of last image',
      'file:': 'File&nbsp;:',
      add_to_project: 'Add to project:',
      input_password: 'Input the password here:',
      validate_with_enter: 'validate with the ENTER key',

      bytes: 'bytes',
      kb: 'KB',
      mb: 'MB',
      gb: 'GB',
      duration: 'Duration',

      portrait: 'Portrait',
      nfc_tag: 'Tag NFC',
      cancel: 'Cancel',
      back: 'Back',
      sureToRemoveAuthor: 'Do you really want to delete this author?',
      sureToCloseModal: 'Do you really want to close this window?',
      sureToRemovePubli: 'Do you really want to delete this publication?',
      sure_to_cancel_stopmotion:
        'Do you really want to cancel this stopmotion?',
      validate_media: 'Validate the media',
      add_keyword: 'Add a keyword',

      showing: 'Showing',
      media_filter: 'Medias filter',
      no_projects_yet: 'No projects yet, create one to start using do•doc!',
      projects_of: 'projects of',
      medias_of: 'medias of',
      projects: 'Projects',
      project: 'Project',
      medias: 'Medias',
      media: 'Media',
      authors: 'Authors',
      authors_list: 'List of authors',
      create_an_author: 'Create an author',
      favorite_medias: 'Favorite medias',
      all_medias: 'All medias',
      create_text: 'Write',
      import: 'Import',
      import_medias: 'Import medias',
      import_all_files: 'Import all files',
      select_files_to_import: 'Select files to import',
      select_cover_image: 'Select a cover image',
      select_portrait_image: 'Select a portrait',
      add_to_publication: 'Add to publication',
      add_a_page: 'Add a page',
      insert_a_page_here: 'Insert a page here',
      remove_this_page: '▲ Remove this page ▲',

      made_with_dodoc: 'Webpage made with do•doc, a free and open-source app',

      loading: 'loading',
      open: 'Open',
      save: 'Save',
      as_favorite: '+ favourite',
      edit: 'Edit',
      print: 'Print',
      create: 'Create',
      remove: 'Remove',
      password: 'Mot de passe',
      protected_by_pass: 'protected by password',
      password_instructions:
        'If set, only users with the password will be able to open this project.',

      sort_by: 'Sort by',
      in_the_order: 'In the order',
      public: 'Public',
      fav: 'Favourite',
      content: 'Content',
      edit: 'Edit',
      width: 'Width',
      height: 'Height',
      zoom: 'Zoom',
      settings: 'Settings',

      'lang:': 'Select lang:',
      lang: 'Select lang',

      photo: 'picture',
      video: 'video',
      stopmotion: 'stop motion',
      audio: 'sound',
      vecto: 'shapes',
      image: 'image',
      text: 'text',
      document: 'document',
      other: 'other',
      with_sound: 'with sound',
      generate: 'Generate',

      export: 'Export',
      export_as_pdf: 'Export as PDF',
      new_window: 'New Window',
      export_video_instructions:
        'Click this button to generate a video from multiple source videos.',
      make_video: 'Make a video',

      select: 'Select',
      unselect: 'Un-select',

      toconnectwithanotherdevice:
        'To access this do•doc element with another device, first connect it to the same wifi network, then type this adress in your browser or scan this QR code:',
      sureToRemoveProject: 'Do you really want to delete this project?',
      sureToRemoveMedia: 'Do you really want to delete this media?',

      publication: 'Publication',
      edit_the_media: 'Edit media',
      edit_project: 'Edit project',

      capture: 'Capture',
      current: 'Current',
      currently: 'Now',
      update: 'Update',

      more_information:
        'For more informations, read the <a href="https://latelier-des-chercheurs.fr/docs/manuel-dodoc" class="js--openInBrowser" target="_blank">documentation (in french)</a> or <a href="mailto:info@latelier-des-chercheurs.fr?subject=do•doc" class="js--openInBrowser" target="_blank">contact</a> the creators of this app.',

      no_media_in_folder: 'No media in this folder.',
      no_public_media_in_folder: 'No public media in this folder.',
      auto_scroll: 'autoscroll',
      scale: 'scale:',
      scale_items: {
        second: 'sec',
        minute: 'min',
        hour: 'h',
        half_day: '½d',
        day: 'd'
      },
      contents_are_stored: 'Contents for this folder are stored in ',
      folder_information: 'Folder information',
      calendar: 'Calendar',
      now: 'now',
      list: 'List',
      fullscreen: 'Fullscreen',
      preview: 'Preview',
      filter: 'Filter',
      filters: 'Filters',
      header_left: 'Left header text',
      header_right: 'Right header text',
      gridstep: 'Step of alignment grid',
      margin_top: 'Margin: top',
      margin_left: 'Margin: left',
      margin_right: 'Margin: right',
      margin_bottom: 'Margin: bottom',
      number_of_medias: 'Number of medias',
      number_of_pages: 'Number of pages',

      export_folder: 'Export as a webpage',
      export: 'Export',

      publication_list: 'Publications list',
      export_publication: 'Export a publication',
      get_pdf:
        'To download a PDF of this publication (for example, to print it), click here:',
      download_pdf: 'Download PDF',
      get_website:
        'To download a website version of this publication (for example, to publish online), click here:',
      download_website: 'Download a website',
      creation_in_progress: 'Creation in progress…',
      pdf_created: 'PDF created',
      video_created: 'The video was created',
      open_in_app: 'Open',
      format: 'Format',
      template: 'Template',
      page_by_page: 'Paged document',
      video_assemblage: 'Video editing',
      web: 'Webpage',

      last_modified: 'Last modified',
      remote_access: 'Acces from other devices',
      img_per_second: 'Images per second',
      sent: 'Sent',

      notifications: {
        ios_not_compatible_with_capture:
          'iPhones and iPads are not currently compatible with the <i>capture</i> page.',
        instead_import_with_this_button:
          'Instead import or capture photos and videos here in the import modal.',
        media_was_sent: 'The media was sent.',
        media_couldnt_been_sent:
          'The media was not sent because of a connexion error.',
        file_was_sent: 'The file was sent.',
        file_upload_not_allowed: 'File upload is not allowed by this browser.',
        connection_active: 'The connection to the server is active.',
        connection_lost: 'The connection to the server was lost.',
        contents_wont_be_editable: 'Content editing is disabled.',
        connection_error:
          'The connection to the server could not be established.',
        'wrong_password_for_folder:': 'Wrong password or folder missing for:',
        'created_edited_media:':
          'A media has been created or edited in folder:',
        project_name_exists:
          'This project name already exists. Please use another.',
        publi_name_exists:
          'This publication name already exists. Please use another.',
        author_name_exists:
          'This author name already exists. Please use another.',
        folder_name_needs_alphanumeric_characters:
          'Folder names need to contain at least one alphanumeric character.',
        'failed_to_get_folder:': 'Failed to get the requested folder:',
        failed_to_start_video_change_source_or_res:
          'Failed to start camera feed. Try changing the source or the resolution.',
        video_source_not_set: 'The source video has not been set.',
        failed_to_start_audio_change_source:
          'Failed to start audio feed. Try changing the source.',
        audio_source_not_set: 'The source audio has not been set.',
        video_stream_not_available: 'Error: Video stream not available.',
        no_content_found_with_nfc_tag:
          'NFC tag detected, bind it to an author or a media to start.',
        author_found_with_nfc_tag:
          'NFC tag detected, the following author will be logged-in:',
        medias_uploaded: 'All medias were imported successfully.',
        medias_upload_failed: 'Error: some medias failed to import.',
        video_converted:
          'The video was converted successfully and added to the project.'
      }
    }
  };

  return messages;
})();
