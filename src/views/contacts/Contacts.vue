<template>
  <div class="contet-dashboard">
    <!-- begin:: Content Head -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container kt-container--fluid">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Contacts</h3>
          <span class="kt-subheader__separator kt-subheader__separator--v"></span>
          <h3 class="kt-subheader__title"></h3>

          <div class="kt-input-icon kt-input-icon--right kt-subheader__search kt-hidden">
            <span class="kt-input-icon__icon kt-input-icon__icon--right">
              <span>
                <i class="flaticon2-search-1"></i>
              </span>
            </span>
          </div>
        </div>
        <div class="kt-subheader__toolbar">
          <div class="kt-subheader__wrapper">
            <a
              href="#"
              class="btn kt-subheader__btn-daterange"
              id="kt_dashboard_daterangepicker"
              data-toggle="kt-tooltip"
              title="Select dashboard daterange"
              data-placement="left"
            >
              <span
                class="kt-subheader__btn-daterange-title"
                id="kt_dashboard_daterangepicker_title"
              >Today</span>&nbsp;
              <span
                class="kt-subheader__btn-daterange-date"
                id="kt_dashboard_daterangepicker_date"
              >Aug 16</span>
              <i class="flaticon2-calendar-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: Content Head -->

    <!-- begin:: Content -->
    <div class="kt-container kt-container--fluid kt-grid__item kt-grid__item--fluid">
      <div class="kt-portlet kt-portlet--mobile">
        <div class="kt-portlet__head kt-portlet__head--lg">
          <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">Contacts</h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <div class="kt-portlet__head-wrapper">
              <div class="kt-portlet__head-actions">
                <div class="dropdown dropdown-inline"></div>&nbsp;
                <a
                  href="/addContacts"
                  class="btn btn-brand btn-elevate btn-icon-sm"
                >Create New Contacts</a>
              </div>
            </div>
          </div>
        </div>

        <div class="kt-portlet__body">
          <div class="row">
            <div class="col-md-12">
              <button v-on:click="filter('Costumer')" type="button" class="btn btn-primary btn-wide">Customer</button>&nbsp;
              <button v-on:click="filter('Vendor')" type="button" class="btn btn-primary btn-wide">Vendor</button>&nbsp;
              <button v-on:click="filter('Employee')" type="button" class="btn btn-primary btn-wide">Employee</button>&nbsp;
              <button v-on:click="filter('Others')" type="button" class="btn btn-primary btn-wide">Others</button>&nbsp;
              <button v-on:click="filter('')" type="button" class="btn btn-primary btn-wide">All Types</button>&nbsp;
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <br />
              <div class="kt-portlet">
                <div class="kt-portlet__head kt-portlet__head--noborder">
                  <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title">
                      All Contacts
                    </h3>
                  </div>
                </div>
                <div class="kt-portlet__body kt-portlet__body--fit-y">
                  <!--begin::Widget -->
                  <div class="kt-widget kt-widget--user-profile-1">
                    <div class="kt-widget__body">
                      <table class="table table-striped- table-bordered table-hover table-checkable dataTable no-footer dtr-inline collapsed">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Display Name</th>
                            <th>Receivables</th>
                            <th>Payables</th>
                            <th>Balance</th>
                            <th>Type</th>
                          </tr>
                        </thead>
                        <tbody v-for="user in filteredContacts ">
                          <tr>
                            <td>{{user.id}}</td>
                            <td>{{user.first_name}} {{user.last_name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.gender}}</td>
                            <td>{{user.id}}</td>
                            <td>{{user.type}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!--end::Widget -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: Content -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Contacts",
  data() {
		return {
      filteredContacts : []
		}
	},
  mounted() {
    return this.$store.dispatch('getListContacts');
  },
  methods: {
    filter: function(fil='') {
      if(!fil) {
        this.filteredContacts = this.contacts
      } else {
        this.filteredContacts = this.contacts.filter(user => user.type==fil)
      }
    }
  },
  computed: {
    contacts: {
      get: function() {
        return this.$store.getters.Contacts;
      },
      set: function() {
        // not use
      }
    },
  },
  watch: {
    contacts(){
      this.filter()
    }
  },
  components: {
    // not use
    }
};
</script>
