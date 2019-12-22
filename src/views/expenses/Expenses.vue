<template>
  <div class="contet-dashboard">
    <!-- begin:: Content Head -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container kt-container--fluid">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Expenses</h3>
          <span class="kt-subheader__separator kt-subheader__separator--v"></span>
          <h3 class="kt-subheader__title"></h3>

          <div class="kt-input-icon kt-input-icon--right kt-subheader__search kt-hidden">
            <input
              type="text"
              class="form-control"
              placeholder="Search order..."
              id="generalSearch"
            />
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
            <h3 class="kt-portlet__head-title">
              Expenses
              <small>penjelasan tentang expenses</small>
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <div class="kt-portlet__head-wrapper">
              <div class="kt-portlet__head-actions">
                <div class="dropdown dropdown-inline"></div>&nbsp;
                <a
                  href="/addExpenses"
                  class="btn btn-brand btn-elevate btn-icon-sm"
                >Create New Expenses</a>
              </div>
            </div>
          </div>
        </div>

        <div class="kt-portlet__body">
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              placeholder="Expenses This Month"
              id="generalSearch"
            />
            <br />
          </div>
          <div class="col-md-12">
            <table
              class="table table-striped- table-bordered table-hover table-checkable"
              id="kt_table_1"
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Category</th>
                  <th>Beneficiary</th>
                  <th>Status</th>
                  <th>Balance Due</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>61715-0752</td>
                  <td>Chinass</td>
                  <td>Tiebadd</td>
                  <td>746 Pine View Junctionfffds</td>
                  <td>Nixie Sailorasdfas</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>61715-075</td>
                  <td>China</td>
                  <td>Tieba</td>
                  <td>746 Pine View Junction</td>
                  <td>Nixie Sailor</td>
                  <td>
                    <button class="btn btn-brand btn-elevate btn-icon-sm">Ubah</button>.
                    <button class="btn btn-danger btn-elevate btn-icon-sm">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
  name: "expenses"
};
</script>
