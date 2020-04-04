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
                  <div
                    class="single-faq"
                    v-for="(faq, id) in allFaqs(cat.id)"
                    :key="id"
                  >
                    <h4>
                      {{ faq.question }}
                    </h4>
                    <p>
                      {{ faq.answer }}
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
export default {
  data() {
    return {
      faqs: {}
    }
  },

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
    },
    allFaqs(i) {
      return this.faqs[i]
    }
  },
  mounted() {
    this.$store.dispatch('getCategories')
    this.faqs = this.$store.getters.faqs
  }
}
</script>
