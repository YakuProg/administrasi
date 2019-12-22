<template>
  <div class="contet-dashboard">
    <!-- begin:: Content Head -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container kt-container--fluid">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Management User</h3>
          <span class="kt-subheader__separator kt-subheader__separator--v"></span>
          <!-- <h3 class="kt-subheader__title">Management User</h3> -->

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
      <!--Begin::content 1-->
      <div class="row">
        <div class="col-md-12">
          <div class="kt-portlet">
            <div class="kt-portlet__body">
              <div class="row">
                <div class="col-md-4">
                  <!--begin::Portlet-->
                  <div class="kt-portlet">
                    <div class="kt-portlet__head">
                      <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">Akses</h3>
                      </div>
                    </div>
                    <div class="kt-portlet__body">
                      <!--begin::Form-->
                      <form class="kt-form">
                        <div class="form-group">
                          <label>Akses</label>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Backup Database
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengambilan Database
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Ubah Kode
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Data Pengguna
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pembatalan Transaksi
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Laporan Pembatalan Transaksi
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Laporan Pemetaan Buku Besar
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pemetaan Buku Besar
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengaturan
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengaturan Lokal
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Register
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Efaktur
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Perubahan Nomor Faktur
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Ubah Sandi
                              <span></span>
                            </label>
                          </div>
                        </div>
                      </form>
                      <!--end::Form-->
                    </div>
                  </div>
                  <!--end::Portlet-->
                </div>
                <div class="col-md-4">
                  <!--begin::Portlet-->
                  <div class="kt-portlet">
                    <div class="kt-portlet__head">
                      <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">Otorisasi</h3>
                      </div>
                    </div>
                    <div class="kt-portlet__body">
                      <!--begin::Form-->
                      <form class="kt-form">
                        <div class="form-group">
                          <label>Akses</label>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Backup Database
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengambilan Database
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Ubah Kode
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Data Pengguna
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pembatalan Transaksi
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Laporan Pembatalan Transaksi
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Laporan Pemetaan Buku Besar
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pemetaan Buku Besar
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengaturan
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengaturan Lokal
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Register
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Efaktur
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Perubahan Nomor Faktur
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Ubah Sandi
                              <span></span>
                            </label>
                          </div>
                        </div>
                      </form>
                      <!--end::Form-->
                    </div>
                  </div>
                  <!--end::Portlet-->
                </div>
                <div class="col-md-4">
                  <!--begin::Portlet-->
                  <div class="kt-portlet">
                    <div class="kt-portlet__head">
                      <div class="kt-portlet__head-label">
                        <h3 class="kt-portlet__head-title">Dashboard</h3>
                      </div>
                    </div>
                    <div class="kt-portlet__body">
                      <!--begin::Form-->
                      <form class="kt-form">
                        <div class="form-group">
                          <label>Akses</label>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Backup Database
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengambilan Database
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Ubah Kode
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Data Pengguna
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pembatalan Transaksi
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Laporan Pembatalan Transaksi
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Laporan Pemetaan Buku Besar
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pemetaan Buku Besar
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengaturan
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Pengaturan Lokal
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Register
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Efaktur
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Perubahan Nomor Faktur
                              <span></span>
                            </label>
                          </div>
                          <div class="kt-checkbox-list">
                            <label class="kt-checkbox kt-checkbox--bold kt-checkbox--brand">
                              <input type="checkbox" /> Ubah Sandi
                              <span></span>
                            </label>
                          </div>
                        </div>
                      </form>
                      <!--end::Form-->
                    </div>
                  </div>
                  <!--end::Portlet-->
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
  name: "ManagementUser"
};
</script>
