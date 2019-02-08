<template>
  <div class="m_project"
    :class="{ 'is--not_authorized_to_admin' : !can_admin_folder }"
  >
    <div class="m_project--presentation" v-if="context !== 'full'">
      <div v-if="previewURL" class="m_project--presentation--vignette" @click="$root.openProject(slugProjectName)">
        <img
          :src="previewURL" class=""
        />
      </div>
      
      <div class="m_project--presentation--text">
        <h2 
          class="m_project--presentation--text--title"
           @click="$root.openProject(slugProjectName)"
           :title="slugProjectName"
        >
          {{ project.name }}
        </h2>

        <div class="m_project--presentation--text--infos">
          <div class="m_keywordField">
            <span 
              v-for="keyword in project.keywords" 
              :key="keyword.title"
              :class="['tagcolorid_' + parseInt(keyword.title, 36)%2, { 'is--active' : $root.settings.project_filter.keyword === keyword.title }]"
            >
              {{ keyword.title }}
            </span>
          </div>
          <div class="m_metaField" v-if="!!project.authors">
            <div>
              {{ $t('author') }}
            </div>
            <div class="m_authorField">
              <span v-if="typeof project.authors === 'string'">
                {{ project.authors }}
              </span>
              <span v-else-if="typeof project.authors === 'object'"
                v-for="author in project.authors"
                :key="author.name"
                class="is--active"
              >
                {{ author.name }}
              </span>
            </div>
          </div>
          <!-- <div class="m_metaField">
            <div>
              {{ $t('created') }}
            </div>
            <div>
              {{ $root.formatDateToHuman(project.date_created) }}
            </div>
          </div>
          <div class="m_metaField">
            <div>
              {{ $t('edited') }}
            </div>
            <div>
              {{ $root.formatDateToHuman(project.date_modified) }}
            </div>
          </div> -->
        </div>
      </div>

    </div>

    <MediaMap
      v-if="context === 'full'"
      :slugProjectName="slugProjectName"
      :project="project"
      :read_only="read_only"
      :can_admin_folder="can_admin_folder"
    >
    </MediaMap>
  </div>
</template>
<script>
import MediaMap from './MediaMap.vue';
import MediaCard from './subcomponents/MediaCard.vue';

export default {
  props: {
    project: Object,
    slugProjectName: String,
    read_only: Boolean,
    index: Number,
    context: String
  },
  components: {
    MediaMap,
    MediaCard
  },
  data() {
    return {
      debugProjectContent: false,
      showEditProjectModal: false,
      showInputPasswordField: false
    };
  },
  watch: {
  },
  mounted() {
  },
  beforeDestroy() {
  },
  computed: {
    previewURL() {
      if(!this.project.hasOwnProperty('preview') || this.project.preview === '') {
        return false;
      }
      const thumb = this.project.preview.filter(p => p.size === 640);
      if(thumb.length > 0) { return `${thumb[0].path}?${(new Date()).getTime()}` }
      return false;
    },
    can_admin_folder() {
      return this.$root.canAdminFolder({
        type: 'projects', 
        slugFolderName: this.slugProjectName
      })
    }
  },
  methods: {
    openProject() {
      this.$root.openProject(this.slugProjectName);
    },
  },
};
</script>
<style scoped>
</style>