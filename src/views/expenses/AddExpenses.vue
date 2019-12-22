<template>
  <div class="contet-dashboard">
    <!-- begin:: Content Head -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container kt-container--fluid">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Add Expenses</h3>
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
            <h3 class="kt-portlet__head-title">Add Expenses</h3>
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
                <div class="form-group row form-group-marginless kt-margin-t-20">
                  <label class="col-lg-1 col-form-label">Pay From</label>
                  <div class="col-lg-3">
                    <select class="form-control" id="exampleSelect1">
                      <option>Location A</option>
                      <option>Location B</option>
                      <option>Location C</option>
                    </select>
                  </div>
                  <label class="col-lg-1 col-form-label">Or</label>
                  <div class="col-lg-3">
                    <div class="kt-checkbox-inline">
                      <label class="kt-checkbox">
                        <input type="checkbox" /> Pay Later
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>

                <div class="form-group row form-group-marginless">
                  <label class="col-lg-1 col-form-label">Benificiary</label>
                  <div class="col-lg-3">
                    <select class="form-control" id="exampleSelect1">
                      <option>Ben A</option>
                      <option>Ben B</option>
                      <option>Ben C</option>
                    </select>
                  </div>
                  <!-- <label class="col-lg-1 col-form-label">Fax:</label>
                  <div class="col-lg-3">
                    <div class="kt-input-icon">
                      <input type="text" class="form-control" placeholder="Fax number" />
                      <span class="kt-input-icon__icon kt-input-icon__icon--right">
                        <span>
                          <i class="la la-info-circle"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <label class="col-lg-1 col-form-label">Address:</label>
                  <div class="col-lg-3">
                    <div class="kt-input-icon">
                      <input type="text" class="form-control" placeholder="Enter your address" />
                      <span class="kt-input-icon__icon kt-input-icon__icon--right">
                        <span>
                          <i class="la la-map-marker"></i>
                        </span>
                      </span>
                    </div>
                  </div>-->
                </div>
                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>
                <div class="form-group row">
                  <label class="col-lg-1 col-form-label">Transc Date</label>
                  <div class="col-lg-3">
                    <div class="kt-input-icon">
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                  <label class="col-lg-1 col-form-label">Transc No</label>
                  <div class="col-lg-3">
                    <input type="text" class="form-control" value="Otomatis" disabled />
                  </div>
                </div>
                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>

                <div class="form-group row form-group-marginless">
                  <label class="col-lg-1 col-form-label">Paymmen Method</label>
                  <div class="col-lg-3">
                    <select class="form-control" id="exampleSelect1">
                      <option>Payment A</option>
                      <option>Payment B</option>
                      <option>Payment C</option>
                    </select>
                  </div>
                </div>

                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>

                <div class="form-group row form-group-marginless">
                  <label class="col-lg-1 col-form-label">Payment For</label>
                  <div class="col-lg-3">
                    <div class="kt-input-icon">
                      <select class="form-control" id="exampleSelect1">
                        <option>Payment For A</option>
                        <option>Payment For B</option>
                        <option>Payment For C</option>
                      </select>
                    </div>
                  </div>
                  <label class="col-lg-1 col-form-label">Description</label>
                  <div class="col-lg-3">
                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                  </div>
                  <label class="col-lg-1 col-form-label">Total</label>
                  <div class="col-lg-3">
                    <div class="kt-input-icon">
                      <input type="number" class="form-control" />
                    </div>
                  </div>
                </div>

                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>

                <div class="form-group row form-group-marginless">
                  <label class="col-lg-1 col-form-label">Memo</label>
                  <div class="col-lg-3">
                    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                  </div>
                </div>

                <div
                  class="kt-separator kt-separator--border-dashed kt-separator--space-lg kt-separator--portlet-fit"
                ></div>

                <div class="form-group row form-group-marginless">
                  <label class="col-lg-1 col-form-label">Attchment</label>
                  <div class="col-lg-3">
                    <input type="file" class="form-control" />
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
                      <button type="reset" class="btn btn-brand float=right">Add Expenses</button>
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
  name: "addexpenses"
};
</script>
