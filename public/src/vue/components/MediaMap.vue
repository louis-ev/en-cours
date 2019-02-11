<template>
  <div class="">

    <div class="m_projectAuthor" v-if="typeof project.authors === 'string'">
      {{ project.authors }}
    </div>

    <!-- <div class="m_actionbar--buttonBar" v-show="$root.state.connected">

      <button 
        class="backButton text-ellipsis" 
        type="button" 
        v-if="$root.do_navigation.view !== 'ListView'" 
        @click="$root.navigation_back()"
      >
        retour
      </button>
    </div> -->

    <!-- <div class="m_actionbar--text">
      {{ $t('showing') }} 
      <span :class="{ 'c-rouge' : sortedMedias.length !== numberOfMedias }">
        {{ sortedMedias.length }} 
        {{ $t('medias_of') }} 
        {{ numberOfMedias }}
      </span>
      <template v-if="$root.allKeywords.length > 0">
        — 
        <button type="button" class="button-nostyle text-uc button-triangle"
          :class="{ 'is--active' : show_filters }"
          @click="show_filters = !show_filters"
        >{{ $t('filters') }}</button>
      </template>

      <template v-if="!show_medias_instead_of_projects && show_filters">
        <TagsAndAuthorFilters
          :allKeywords="mediaKeywords"
          :allAuthors="mediaAuthors"
          :keywordFilter="$root.settings.media_filter.keyword"
          :authorFilter="$root.settings.media_filter.author"
          :favFilter="$root.settings.media_filter.fav"
          @setKeywordFilter="a => $root.setMediaKeywordFilter(a)"
          @setAuthorFilter="a => $root.setMediaAuthorFilter(a)"
          @setFavFilter="a => $root.setFavAuthorFilter(a)"
        />
      </template>
    </div> -->


    <div class="m_layerOptions">
      <div class="m_metaField" v-if="project.password === 'has_pass'">
        <small class="m_project--presentation--text--infos--password c-rouge" v-if="project.password === 'has_pass'">
          <label>{{ $t('protected_by_pass') }}</label>
        </small>

        <button v-if="!can_admin_folder" type="button" class="buttonLink" :readonly="read_only" @click="showInputPasswordField = !showInputPasswordField">
          {{ $t('password') }}
        </button>

        <div v-if="showInputPasswordField && !can_admin_folder" class="margin-bottom-small">
          <input type="password" ref="passwordField" @keyup.enter="submitPassword" autofocus placeholder="…">
          <button type="button" class="button button-bg_rounded bg-bleuvert" @click="submitPassword">Envoyer</button>
        </div>
      </div>

      <button type="button" class="barButton"
        @click="current_mode = 'preview'"
        :class="{ 'is--active' : current_mode === 'preview' }"
      >
        1. aperçu
      </button>

      <button type="button" class="barButton"
        v-if="can_admin_folder"
        @click="current_mode = 'media'"
        :class="{ 'is--active' : current_mode === 'media' }"
      >
        2. média
      </button>

      <div class="padding-left-small"
        v-if="current_mode === 'media'"
      >

        <button type="button" class="barButton barButton_import" 
          @click="showImportModal = true"
        ><span>    
          {{ $t('import') }}
        </span></button>      
        <UploadFile
          v-if="showImportModal"
          @close="showImportModal = false"
          :slugFolderName="slugProjectName"
          :type="'projects'"
          :read_only="read_only"
        />

        <button type="button" class="barButton barButton_text" 
          @click="createTextMedia"
        >
          <span>
            {{ $t('create_text') }}
          </span>
        </button>

      </div>

      <button type="button" class="barButton"
        v-if="can_admin_folder"
        @click="current_mode = 'drawing'"
        :class="{ 'is--active' : current_mode === 'drawing' }"
      >
        3. liens
      </button>

      <div class="padding-left-small"
        v-if="current_mode === 'drawing'"
      >

        <button type="button" class="barButton"
        >
          <label for="select_drawings">
            <input type="checkbox" id="select_drawings" v-model="drawing_options.select_mode">&nbsp;sélectionner
          </label>        
        </button>

        <button type="button" class="barButton"
          @click="$eventHub.$emit('remove_selection')"
        >
          supprimer sélection
        </button>

        <input type="range" min="1" max="10" v-model="drawing_options.width" />
      </div>

    </div>


    <div class="m_mediamap">
      <div 
        class="m_mediamap--grid"
        :style="`--gridstep: ${page.gridstep}px; --margin_left: ${page.margin_left}px; --margin_right: ${page.margin_right}px; --margin_top: ${page.margin_top}px; --margin_bottom: ${page.margin_bottom}px;`"
      />

      <div class="m_mediamap--buttons">
        <button v-if="can_admin_folder" type="button" class="buttonLink" @click="showEditProjectModal = true" :disabled="read_only">
          {{ $t('edit') }}
        </button>
        <button v-if="can_admin_folder" type="button" class="buttonLink" @click="removeProject()" :disabled="read_only">
          {{ $t('remove') }}
        </button>
      </div>

      <div class="m_mediamap--back" @click="closeProject">
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px"
          viewBox="0 0 595.28 841.89" style="enable-background:new 0 0 595.28 841.89;" xml:space="preserve">
        <polygon points="44.17,42.51 28.59,57.07 28.59,289.94 36.38,304.49 59.76,326.32 67.55,326.32 75.34,319.05 75.34,122.55 
          83.14,122.55 402.61,420.94 410.4,420.94 433.78,399.1 433.78,391.83 114.31,93.45 114.31,86.17 324.7,86.17 332.48,78.89 
          332.48,71.62 309.11,49.78 293.53,42.51 "/>
        </svg>
      </div>


      <EditProject
        v-if="showEditProjectModal"
        :project="project"
        :slugProjectName="slugProjectName"
        @close="showEditProjectModal = false"
        :read_only="read_only"
      />


      <div
        v-for="media in sortedMedias" 
        :key="media.slugMediaName"
      >
        <MediaPublication
          :page="page"
          :media="media"
          :preview_mode="current_mode !== 'media'"
          :read_only="read_only"
          :pixelsPerMillimeters="1"
          :slugFolderName="slugProjectName"
          :metaFileName="media.metaFileName"
          :type="'projects'"
          @removePubliMedia="values => { removeMedia(values) }"
          @selected="newSelection"
          @unselected="noSelection"
        />
      </div>

      <FabricCanvas
        :medias="sortedMedias"
        :project="project"
        :slugProjectName="slugProjectName"
        :current_mode="current_mode"
        :drawing_options="drawing_options"
        :class="{ 'is--clickthrough' : current_mode !== 'drawing' }"
      />      

    </div>  

  </div>    
</template>
<script>
import UploadFile from './modals/UploadFile.vue';
import MediaPublication from './subcomponents/MediaPublication.vue';
import FabricCanvas from './subcomponents/FabricCanvas.vue';
import TagsAndAuthorFilters from './subcomponents/TagsAndAuthorFilters.vue';
import { setTimeout } from 'timers';
import EditProject from './modals/EditProject.vue';

export default {
  props: {
    project: Object,
    slugProjectName: String,
    read_only: Boolean,
    can_admin_folder: Boolean
  },
  components: {
    MediaPublication,
    FabricCanvas,
    UploadFile,
    EditProject,
    TagsAndAuthorFilters
  },
  data() {
    return {
      mediaSort: {
        field: 'date_uploaded',
        type: 'date',
        order: 'descending'
      },
      showImportModal: false,
      show_filters: false,
      showEditProjectModal: false,
      page: {
        margin_left: 0,
        margin_right: 0,
        margin_top: 0,
        margin_bottom: 0,
        width: 1200,
        height: 5000,
        gridstep: 50
      },
      has_media_selected: false,
      current_mode: 'preview',
      showInputPasswordField: false,
      drawing_options: {
        width: 4,
        select_mode: false,
        color: '#4034FF'
      }
    }
  },
  mounted() {
    if(this.$root.settings.media_filter.keyword || this.$root.settings.media_filter.author) {
      this.show_filters = true;
    }
  },
  created() {
    // document.addEventListener('dragover', this.fileDragover);
    this.$eventHub.$on('modal.prev_media', this.prevMedia);
    this.$eventHub.$on('modal.next_media', this.nextMedia);
  },
  beforeDestroy() {
    // document.removeEventListener('dragover', this.fileDragover);
    this.$root.settings.media_filter.author = false;
    this.$root.settings.media_filter.keyword = false;
    this.$root.settings.media_filter.fav = false;
    
    this.$eventHub.$off('modal.prev_media', this.prevMedia);
    this.$eventHub.$off('modal.next_media', this.nextMedia);
  },
  watch: {
  },

  computed: {
    numberOfMedias() {
      if(!this.project.hasOwnProperty('medias')) {
        return 0;
      }
      return Object.keys(this.project.medias).length;
    },
    mediaKeywords() {
      // grab all keywords from this.project.medias
      return this.$root.getAllKeywordsFrom(this.project.medias);      
    },
    mediaAuthors() {
      return this.$root.getAllAuthorsFrom(this.project.medias);      
    },
    sortedMedias() {
      var sortable = [];

      if(!this.project.hasOwnProperty('medias')) {
        return sortable;
      }

      for (let slugMediaName in this.project.medias) {
        let orderBy;
        const media = this.project.medias[slugMediaName];

        if (this.mediaSort.type === 'date') {
          if(media.hasOwnProperty(this.mediaSort.field)) {
            orderBy = +this.$moment(
              media[this.mediaSort.field],
              'YYYY-MM-DD HH:mm:ss'
            );
          }
          if(orderBy === undefined || Number.isNaN(orderBy)) {
            orderBy = 1000;
          }
        } else if (this.mediaSort.type === 'alph') {
          orderBy = media[this.mediaSort.field];
          if(orderBy === undefined || Number.isNaN(orderBy)) {
            orderBy = 1000;
          }
          if(orderBy === undefined) {
            orderBy = 'z';
          }          
        }

        if(this.$root.isMediaShown(media)) {
          sortable.push({ slugMediaName, orderBy });
        }
        
      }

      let sortedSortable = sortable.sort(function(a, b) {
        let valA = a.orderBy;
        let valB = b.orderBy;
        if (
          typeof a.orderBy === 'string' &&
          typeof b.orderBy === 'string'
        ) {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }
        if (valA < valB) {
          return -1;
        }
        if (valA > valB) {
          return 1;
        }
        return 0;
      });

      if (this.mediaSort.order === 'descending') {
        sortedSortable.reverse();
      }

      // array order is garanteed while objects properties aren’t,
      // that’s why we use an array here
      let sortedMedias = sortedSortable.reduce((accumulator, d) => {
        let sortedMediaObj = this.project.medias[d.slugMediaName];
        sortedMediaObj.slugMediaName = d.slugMediaName;
        accumulator.push(sortedMediaObj);
        return accumulator;
      }, []);
      
      return sortedMedias;
    }    
  },
  methods: {
    fileDragover() {
      this.showImportModal = true;
    },
    prevMedia() {
      this.mediaNav(-1);
    },
    nextMedia() {
      this.mediaNav(+1);
    },
    mediaNav(relative_index) {
      const current_media_index = this.sortedMedias.findIndex(m => m.metaFileName === this.$root.media_modal.current_metaFileName);
      const new_media = this.sortedMedias[current_media_index + relative_index];
      this.$root.closeMedia();
      
      if(!!new_media) {
        this.$nextTick(() => {
          this.openMediaModal(new_media.metaFileName);
        });
      }

    },
    openMediaModal(metaFileName) {
      if (this.$root.state.dev_mode === 'debug') {
        console.log('METHODS • MediaMap: openMediaModal');
      }
      this.$root.openMedia({ slugProjectName: this.slugProjectName, metaFileName });      
    },
    createTextMedia() {
      this.$eventHub.$on('socketio.media_created_or_updated', this.newTextMediaCreated);

      const y = Math.max(document.getElementsByClassName('m_projectview')[0].scrollTop, Math.round(Math.random() * 5) * 40);
      this.$root.createMedia({
        slugFolderName: this.slugProjectName,
        type: 'projects',
        additionalMeta: {
          type: 'text',
          x: Math.round(Math.random() * 5) * 40,
          y,
          width: 200,
          height: 200
        }
      });
      this.current_mode = 'media';
    },
    submitPassword() {
      console.log('METHODS • Project: submitPassword');
      this.$auth.updateAdminAccess({
        "projects": {
          [this.slugProjectName]: this.$refs.passwordField.value
        }
      });
      this.$socketio.sendAuth();
    },
    newTextMediaCreated(mdata) {
      if (this.$root.justCreatedMediaID === mdata.id) {
        this.$root.justCreatedMediaID = false;
        this.$eventHub.$off('socketio.media_created_or_updated', this.newTextMediaCreated);
        this.openMediaModal(mdata.metaFileName);
      }
    },
    removeMedia(values) {
      if (this.$root.state.dev_mode === 'debug') {
        console.log('METHODS • MediaCard: removeMedia');
      }
      if (window.confirm(this.$t('sureToRemoveMedia'))) {
        this.$root.removeMedia(this.slugProjectName, this.metaFileName);
      }
    },
    newSelection(mediaID) {
      this.has_media_selected = true;
      this.$emit('newMediaSelected', mediaID);
    },
    noSelection() {
      this.has_media_selected = false;
    },
    removeProject() {
      if (window.confirm(this.$t('sureToRemoveProject'))) {
        this.$root.removeFolder({ 
          type: 'projects', 
          slugFolderName: this.slugProjectName
        });
        this.closeProject();
      }
    },
    closeProject() {
      this.$root.closeProject();
    }
  }
}
</script>
<style>

</style>