<template>
  <div class="contet-dashboard">
    <!-- begin:: Content Head -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container kt-container--fluid">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Add Contacts</h3>
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
            <h3 class="kt-portlet__head-title">Add Contacts</h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <div class="kt-portlet__head-wrapper">
              <div class="kt-portlet__head-actions">
                <div class="dropdown dropdown-inline"></div>&nbsp;
                <a href="#" class="btn btn-brand btn-elevate btn-icon-sm">Back</a>
              </div>
            </div>
          </div>
        </div>

        <div class="kt-portlet__body">
          <!-- batas -->

          <div class="kt-portlet">
            <!--begin::Form-->
            <form class="kt-form kt-form--label-right">
              <div class="kt-portlet__body">
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">
                    <b>Biodata</b>
                  </label>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-3 col-form-label">Nik</label>
                  <div class="col-6">
                    <input class="form-control" type="text" id="example-text-input" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Nama</label>
                  <div class="col-6">
                    <input class="form-control" type="text" id="example-search-input" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Tempat Lahir</label>
                  <div class="col-6">
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-date-input" class="col-3 col-form-label">Tanggal Lahir</label>
                  <div class="col-6">
                    <input
                      class="form-control"
                      type="date"
                      value="1996-08-19"
                      id="example-date-input"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Alamat</label>
                  <div class="col-6">
                    <span class="small">
                      <code>RT/RW, Kelurahan/Desa, dan Kecamatan</code>
                    </span>
                    <textarea class="form-control" rows="5"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Agama</label>
                  <div class="col-6">
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Status Perkawinan</label>
                  <div class="col-6">
                    <select class="form-control">
                      <option value>Lajang</option>
                      <option value>Menikah</option>
                      <option value>Duda</option>
                      <option value>Janda</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Pekerjaan</label>
                  <div class="col-6">
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">NPWP</label>
                  <div class="col-6">
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">
                    <b>Bank Accounts</b>
                  </label>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Nama Bank</label>
                  <div class="col-6">
                    <select class="form-control">
                      <option value>BNI</option>
                      <option value>BRI</option>
                      <option value>Mandiri</option>
                      <option value>BCA</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Nomor Rekening</label>
                  <div class="col-6">
                    <input class="form-control" type="number" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Nama Rekening</label>
                  <div class="col-6">
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Contacts Type</label>
                  <div class="col-6">
                    <div class="kt-checkbox-inline">
                      <label class="kt-checkbox">
                        <input type="checkbox" /> Customer
                        <span></span>
                      </label>
                      <label class="kt-checkbox">
                        <input type="checkbox" /> Vendor
                        <span></span>
                      </label>
                      <label class="kt-checkbox">
                        <input type="checkbox" /> Employee
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">Account Type</label>
                  <div class="col-6">
                    <div class="kt-checkbox-inline">
                      <label class="kt-checkbox">
                        <input type="checkbox" /> Account Receivable
                        <span></span>
                      </label>
                      <label class="kt-checkbox">
                        <input type="checkbox" /> Account Payyable
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-search-input" class="col-3 col-form-label">File Scan</label>
                  <div class="col-6">
                    <span class="small">
                      <code>Scan Ktp / NPWP / ETC</code>
                    </span>
                    <input class="form-control" type="file" />
                  </div>
                </div>
              </div>
              <div class="kt-portlet__foot">
                <div class="kt-form__actions">
                  <div class="row">
                    <div class="col-lg-6">
                      <button type="reset" class="btn btn-secondary float=left">Cancel</button>
                    </div>
                    <div class="col-lg-6 kt-align-right">
                      <button type="reset" class="btn btn-brand float=right">Add Contacts</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!--end::Form-->
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
  name: "AddContacts"
};
</script>
