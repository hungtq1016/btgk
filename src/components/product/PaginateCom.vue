<template>
  <div class="col-12 pb-1">
    <nav aria-label="Page navigation">
      <!-- <ul >
        <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul> -->
      <ul class="pagination justify-content-center mb-3">
        <li class="page-item">
          <button  class="page-link"
            type="button"
            @click="onClickFirstPage"
            :disabled="isInFirstPage"
          >
            First
          </button>
        </li>
    
        <li class="page-item">
          <button  class="page-link"
            type="button"
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
          >
            Previous
          </button>
        </li>
    
        <!-- Visible Buttons Start -->
    
        <li class="page-item"
          v-for="page in pages"
          :key="page.name"
        >
          <button  class="page-link"
            type="button"
            @click="onClickPage(page.name)"
            :disabled="page.isDisabled"
          >
            {{ page.name }}
          </button>
        </li>
    
        <!-- Visible Buttons End -->
    
        <li class="page-item">
          <button  class="page-link"
            type="button"
            @click="onClickNextPage"
            :disabled="isInLastPage"
          >
            Next
          </button>
        </li>
    
        <li class="page-item">
          <button  class="page-link"
            type="button"
            @click="onClickLastPage"
            :disabled="isInLastPage"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>