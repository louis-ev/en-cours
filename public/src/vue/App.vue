<template>
  <div id="app">

    <template 
      v-if="$root.state.mode === 'live'"
    >    

      <SystemBar
        v-if="$root.settings.enable_system_bar"
        :withTitleBar="true"
      >
      </SystemBar>
      
      <div class="m_activitiesPanel">
        <div 
          class="m_activitiesPanel--do"
          :class="{ 'is--large' : activitiesPanel_isLarge }"
        >
          <transition name="ListView" :duration="500">
            <ListView
              :read_only="!$root.state.connected"
              :projects="$root.store.projects"
            />
          </transition>
          <transition name="ListView" :duration="300">
            <ProjectView
              v-if="['ProjectView'].includes($root.do_navigation.view)"
              :slugProjectName="$root.do_navigation.current_slugProjectName"
              :project="$root.currentProject"
              :read_only="!$root.state.connected"
            />
          </transition>
        </div>
      </div>
      <EditMedia
        v-if="$root.media_modal.open"
        :slugMediaName="$root.media_modal.current_metaFileName"
        :slugProjectName="$root.media_modal.current_slugProjectName"
        :media="$root.store.projects[$root.media_modal.current_slugProjectName].medias[$root.media_modal.current_metaFileName]"
        @close="$root.closeMedia()"
        :read_only="!$root.state.connected"
      >
      </EditMedia>      
    </template>  

    <portal-target name="modal_container" />

  </div>
</template>

<script>
import SystemBar from './SystemBar.vue';
import TopBar from './TopBar.vue';
import ListView from './ListView.vue';
import ProjectView from './ProjectView.vue';
import EditMedia from './components/modals/EditMedia.vue';


export default {
  name: 'app',
  components: {
    SystemBar,
    ListView,
    ProjectView,
    EditMedia
  },
  props: {
  },
  data() {
    return {
      minPercent: 0,
      split: 'vertical',
      is_dragged: false,
      drag_offset: 0,
      hasMoved: false,
      height: null,
      percent: 100,
      type: 'width',
      resizeType: 'left',
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },
  watch: {
  },
  created() {
  },
  computed: {
    userSelect() {
      return this.is_dragged ? 'none' : ''
    },
    cursor() {
      return this.is_dragged ? 'col-resize' : ''
    },
    activitiesPanel_isLarge() {
      if((this.percent/100*this.$root.settings.windowWidth) < 850) {
        return false;
      }
      if(this.$root.settings.windowHeight < 650) {
        return false;
      }
      return true;
    }
  },
  methods: {
    // stopDragtogglePubli() {
    //   console.log('METHODS • App: stopDragtogglePubli');
    //   this.is_dragged = false;
    //   if(!this.$root.settings.show_publi_panel) {
    //     this.percent = 50;
    //     this.$root.openPubliPanel();
    //   } else {
    //     this.percent = 100;
    //     this.$root.closePubliPanel();
    //   }
    // },
    dragPubliPanel(event, type) {
      if (this.$root.state.dev_mode === 'debug') {
        console.log(`METHODS • App: dragPubliPanel with type = ${type} and is_dragged = ${this.is_dragged}`);
      }
      
      this.drag_offset = - event.target.offsetWidth + event.offsetX;
      if(!this.drag_offset) {
        this.drag_offset = 0;
      }

      if(type === 'mouse') {
        window.addEventListener('mousemove', this.dragMove);
        window.addEventListener('mouseup', this.dragUp);
      } else if(type === 'touch') {
        window.addEventListener('touchmove', this.dragMove);
        window.addEventListener('touchend', this.dragUp);
      }
    },
    dragMove(event) {
      console.log('METHODS • App: dragMove');

      if (!this.is_dragged) {
        this.is_dragged = true;
      } else {

        let pageX = !!event.pageX ? event.pageX : event.touches[0].pageX;
        pageX = pageX - this.drag_offset;

        const percent = Math.floor((pageX / window.innerWidth) * 10000) / 100

        if (percent > this.minPercent && percent < 100 - this.minPercent) {
          this.percent = percent
        }

        this.$emit('resize')
        this.hasMoved = true
      }
    },
    dragUp(event) {
      if (this.$root.state.dev_mode === 'debug') {
        console.log(`METHODS • App: dragUp with is_dragged = ${this.is_dragged}`);
      }
      window.removeEventListener('mousemove', this.dragMove);
      window.removeEventListener('mouseup', this.dragUp);
      window.removeEventListener('touchmove', this.dragMove);
      window.removeEventListener('touchend', this.dragUp);

      if (this.is_dragged) {
        this.is_dragged = false;

        if(this.percent >= 90) {
          this.percent = 100;
          this.$root.closePubliPanel();
          return;
        } 
        
        if(this.$root.settings.show_publi_panel === false) {
          this.$root.openPubliPanel();
        }      
        if(this.percent <= 10) {
          this.percent = 0;
        }
      } else {
        if(!this.$root.settings.show_publi_panel) {
          this.percent = 50;
          this.$root.openPubliPanel();
        } else {
          this.percent = 100;
          this.$root.closePubliPanel();
        }
      }

      return false;
    }
  }
};
</script>

<style lang="less" src="style.less"></style>