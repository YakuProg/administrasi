<template>
  <div class="contet-dashboard">
    <!-- begin:: Content Head -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container kt-container--fluid">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Cashier</h3>
          <span class="kt-subheader__separator kt-subheader__separator--v"></span>
          <h3 class="kt-subheader__title">Cashier Transaction</h3>

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
    <!-- content body -->
    <div class="kt-container kt-container--fluid kt-grid__item kt-grid__item--fluid">
      <!--Begin::App-->
      <div class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
        <!--Begin:: App Aside Mobile Toggle-->
        <button class="kt-app__aside-close" id="kt_user_profile_aside_close">
          <i class="la la-close"></i>
        </button>
        <!--End:: App Aside Mobile Toggle-->

        <!--Begin:: App Aside-->
        <div class="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside">
          <!--begin:: Widgets/Applications/User/Profile1-->
          <div class="kt-portlet">
            <div class="kt-portlet__head kt-portlet__head--noborder">
              <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">Cashier Transaction</h3>
              </div>
            </div>
            <div class="kt-portlet__body kt-portlet__body--fit-y">
              <!--begin::Widget -->
              <div class="kt-widget kt-widget--user-profile-1">
                <div class="kt-widget__body">
                  <div class="kt-widget__items">
                    <a href="overview.html" class="kt-widget__item">
                      <span class="kt-widget__section">
                        <span class="kt-widget__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            class="kt-svg-icon"
                          >
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <path
                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                fill="#000000"
                                fill-rule="nonzero"
                              />
                              <path
                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span class="kt-widget__desc">Cashier Cash / Buku Kas</span>
                      </span>
                    </a>
                    <a
                      href="personal-information.html"
                      class="kt-widget__item kt-widget__item--active"
                    >
                      <span class="kt-widget__section">
                        <span class="kt-widget__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            class="kt-svg-icon"
                          >
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <path
                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                fill="#000000"
                                fill-rule="nonzero"
                              />
                              <path
                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span class="kt-widget__desc">Sales / Penjualan</span>
                      </span>
                    </a>
                    <a href="overview.html" class="kt-widget__item">
                      <span class="kt-widget__section">
                        <span class="kt-widget__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            class="kt-svg-icon"
                          >
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <path
                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                fill="#000000"
                                fill-rule="nonzero"
                              />
                              <path
                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span class="kt-widget__desc">Purchases / Pembelian</span>
                      </span>
                    </a>
                    <a href="overview.html" class="kt-widget__item">
                      <span class="kt-widget__section">
                        <span class="kt-widget__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                            class="kt-svg-icon"
                          >
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <polygon points="0 0 24 0 24 24 0 24" />
                              <path
                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                fill="#000000"
                                fill-rule="nonzero"
                              />
                              <path
                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                fill="#000000"
                                opacity="0.3"
                              />
                            </g>
                          </svg>
                        </span>
                        <span class="kt-widget__desc">Contacts / Buku Panjar</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <!--end::Widget -->
            </div>
          </div>
          <!--end:: Widgets/Applications/User/Profile1-->
        </div>
        <!--End:: App Aside-->

        <!--Begin:: App Content-->
        <div class="kt-grid__item kt-grid__item--fluid kt-app__content">
          <div class="row">
            <div class="col-xl-12">
              <div class="kt-portlet">
                <div class="kt-portlet__head">
                  <div class="kt-portlet__head-label">
                    <h3 class="kt-portlet__head-title">
                      Personal Information
                      <small>update your personal informaiton</small>
                    </h3>
                  </div>
                  <div class="kt-portlet__head-toolbar">
                    <div class="kt-portlet__head-wrapper"></div>
                  </div>
                </div>

                <!-- <form class="kt-form kt-form--label-right">
                  <div class="kt-portlet__body">
                    <div class="kt-section kt-section--first">
                      <div class="kt-section__body">
                        <div class="row">
                          <label class="col-xl-3"></label>
                          <div class="col-lg-9 col-xl-6">
                            <h3 class="kt-section__title kt-section__title-sm">Customer Info:</h3>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                          <div class="col-lg-9 col-xl-6">
                            <div class="kt-avatar kt-avatar--outline" id="kt_user_avatar">
                              <div
                                class="kt-avatar__holder"
                                style="background-image: url(https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/users/100_13.jpg)"
                              ></div>
                              <label
                                class="kt-avatar__upload"
                                data-toggle="kt-tooltip"
                                title
                                data-original-title="Change avatar"
                              >
                                <i class="fa fa-pen"></i>
                                <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                              </label>
                              <span
                                class="kt-avatar__cancel"
                                data-toggle="kt-tooltip"
                                title
                                data-original-title="Cancel avatar"
                              >
                                <i class="fa fa-times"></i>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="form-group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">First Name</label>
                          <div class="col-lg-9 col-xl-6">
                            <input class="form-control" type="text" value="Nick" />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">Last Name</label>
                          <div class="col-lg-9 col-xl-6">
                            <input class="form-control" type="text" value="Bold" />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">Company Name</label>
                          <div class="col-lg-9 col-xl-6">
                            <input class="form-control" type="text" value="Loop Inc." />
                            <span
                              class="form-text text-muted"
                            >If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                          </div>
                        </div>

                        <div class="row">
                          <label class="col-xl-3"></label>
                          <div class="col-lg-9 col-xl-6">
                            <h3 class="kt-section__title kt-section__title-sm">Contact Info:</h3>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
                          <div class="col-lg-9 col-xl-6">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="la la-phone"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                class="form-control"
                                value="+35278953712"
                                placeholder="Phone"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                            <span
                              class="form-text text-muted"
                            >We'll never share your email with anyone else.</span>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-lg-3 col-form-label">Email Address</label>
                          <div class="col-lg-9 col-xl-6">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="la la-at"></i>
                                </span>
                              </div>
                              <input
                                type="text"
                                class="form-control"
                                value="nick.bold@loop.com"
                                placeholder="Email"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-group form-group-last row">
                          <label class="col-xl-3 col-lg-3 col-form-label">Company Site</label>
                          <div class="col-lg-9 col-xl-6">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Username"
                                value="loop"
                              />
                              <div class="input-group-append">
                                <span class="input-group-text">.com</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="kt-portlet__foot">
                    <div class="kt-form__actions">
                      <div class="row">
                        <div class="col-lg-3 col-xl-3"></div>
                        <div class="col-lg-9 col-xl-9"></div>
                      </div>
                    </div>
                  </div>
                </form>-->
              </div>
            </div>
          </div>
        </div>
        <!--End:: App Content-->
      </div>
      <!--End::App-->
    </div>
    <!-- content end body -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "CashierTransaction"
};
</script>
