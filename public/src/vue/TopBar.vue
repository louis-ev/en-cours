<template>
  <div class="m_topbar">
    <div class="m_topbar--left">
      <div class="m_topbar--left--logo">
        <!-- <transition name="BackButton" :duration="500">
          <button class="backButton text-ellipsis" type="button" v-if="has_back_button" @click="goBack()">
            ‹ <span class="backButton--text">{{ $t('back') }}</span>
          </button>
        </transition>-->
        <span class="m_topbar--left--logo--type" @click="goHome()">
          en cours
          <span>*</span>
        </span>
      </div>
      <!-- 
      <button type="button" class="m_topbar--left--menuButton"
        v-if="menu_is_enabled"
        @click="toggleMenu()"
      >
        <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
            x="0px" y="0px" width="20px" height="20px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">
          <rect class="st0" width="108.2" height="21"/>
          <rect y="36.5" class="st0" width="108.2" height="21"/>
          <rect y="73" class="st0" width="108.2" height="21"/>
        </svg>
      </button> 
      -->
    </div>

    <div
      class="m_topbar--center"
      :class="{ 'has--menu_open' : $root.do_navigation.view === 'ProjectView' }"
    />

    <div class="m_topbar--right">
      <div class="m_topbar--right--tagline" v-if="!project.hasOwnProperty('name')">
        <div>
          <small>
            *un
            <span :style="`color: var(--color-maroon);`">état</span> de la recherche
            <br />de projet à artec
          </small>
        </div>
      </div>
      <div class="m_topbar--right--projectName" v-if="project.hasOwnProperty('name')">
        <div @click="$root.do_navigation.view = 'ProjectView'">
          <span>{{ project.name }}</span>
        </div>
      </div>
    </div>

    <div
      class="m_topbar--status"
      v-if="!$root.state.connected"
    >{{ $t('notifications.connection_lost') }} {{ $t('notifications.contents_wont_be_editable') }}</div>
  </div>
</template>
<script>
export default {
  props: ["has_back_button", "slugProjectName", "authors", "project"],
  components: {},
  data() {
    return {
      showQRModal: false,

      menu_is_enabled: false,
      show_menu: false
    };
  },
  created() {},
  mounted() {
    this.menuVisibility();
  },
  beforeDestroy() {},
  watch: {
    "$root.settings.windowWidth": function() {
      this.menuVisibility();
    }
  },
  computed: {},
  methods: {
    menuVisibility() {
      if (this.$root.settings.windowWidth < 820) {
        this.menu_is_enabled = true;
      } else {
        this.menu_is_enabled = false;
      }
    },
    goBack() {
      this.$root.navigation_back();
    },
    goHome() {
      this.$root.closeProject();
    },
    toggleMenu() {
      this.show_menu = !this.show_menu;
    },
    urlToPortrait(slug, preview) {
      if (!preview) return "";
      let pathToSmallestThumb = preview.filter(m => m.size === 180)[0].path;
      return pathToSmallestThumb;
    }
  }
};
</script>