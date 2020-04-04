<template>
  <div>
    <!-- faq begin -->
    <div data-aos="fade-up" data-aos-duration="700" class="faq">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-3 col-lg-3">
            <div class="faq-sidebar">
              <!-- <SearchWidget /> -->

              <h3 class="catrgory">Categories</h3>
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  :class="active(id)"
                  v-for="(cat, id) in cats"
                  :key="id"
                  :id="'v-pills-' + id + '-tab'"
                  data-toggle="pill"
                  :href="'#v-pills-' + id"
                  role="tab"
                  :aria-controls="'v-pills-' + id"
                  aria-selected="true"
                  >{{ cat.name }}</a
                >
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <div class="faq-content">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  v-for="(cat, id) in cats"
                  :key="id"
                  :class="activeCon(id)"
                  :id="'v-pills-' + id"
                  role="tabpanel"
                  :aria-labelledby="'v-pills-' + id + '-tab'"
                >
                  <div class="single-faq">
                    <h4>
                      Can I participate in a national lottery of a foreign
                      country?
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page whene at
                      layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters too using
                      eader will be distracted by the readable conten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- faq end -->
  </div>
</template>

<script>
// import SearchWidget from '@/components/SearchWidget';

export default {
  //   components: {
  //     SearchWidget
  //   }
  computed: {
    cats() {
      return this.$store.getters.cats
    }
  },
  methods: {
    active(id) {
      return id == 0 ? 'nav-link active' : 'nav-link'
    },
    activeCon(id) {
      return id == 0 ? 'tab-pane fade show active' : 'tab-pane fade'
    }
  },
  mounted() {
    this.$store.dispatch('getCategories')
  }
}
</script>
