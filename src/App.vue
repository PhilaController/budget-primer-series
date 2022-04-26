<template>
  <div id="app" class="reports">
    <div id="all-audits" class="container grid is-visible">
      <div class="card" v-for="report in reports" :key="report.slug">
        <div class="card-body">
          <h3 id="audittitle1">{{ report.title }}</h3>
          <p class="small text-muted">{{ report.date }}</p>
          <p></p>
          <p>
            {{ report.description }}
          </p>
          <p></p>
        </div>
        <div class="card-footer">
          <a
            id="auditcta1"
            aria-label="Learn More:"
            aria-labelledby="auditcta1 audittitle1"
            :href="`https://controller.phila.gov/philadelphia-audits/${report.slug}`"
            class="btn btn-sm btn-outline-primary"
            >Learn More</a
          >
          <a
            id="auditpdf1"
            aria-label="PDF:"
            aria-labelledby="auditpdf1 audittitle1"
            :href="report.pdf"
            class="btn btn-sm btn-outline-primary ml-2"
            ><i class="fas fa-file-pdf"></i>PDF</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { reports: null };
  },
  async created() {
    let url =
      "https://raw.githubusercontent.com/PhilaController/budget-primer-series/main/src/data/reports.json";
    const response = await fetch(url);
    this.reports = await response.json();
  },
};
</script>

<style>
#all-audits .card {
  max-width: 340px !important;
  min-height: 350px;
}

#all-audits .card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#all-audits {
  display: flex;
  justify-content: center;
}
.card-footer {
  display: flex;
}
.card-footer a {
  width: 100%;
}

@media screen and (max-width: 767px) {
  #all-audits {
    flex-direction: column;
  }
}
</style>


