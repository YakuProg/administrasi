<template>
  <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
    <!-- begin:: Content Head -->
    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
      <div class="kt-container  kt-container--fluid ">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">
            Cash and Bank                           
          </h3>
          <span class="kt-subheader__separator kt-subheader__separator--v"></span>
          <div class="kt-subheader__group" id="kt_subheader_search">
            <span class="kt-subheader__desc" id="kt_subheader_total">
              54 Total
            </span>
            <form class="kt-margin-l-20" id="kt_subheader_search_form">
              <div class="kt-input-icon kt-input-icon--right kt-subheader__search">
                <input type="text" class="form-control" placeholder="Search..." id="generalSearch">
                <span class="kt-input-icon__icon kt-input-icon__icon--right">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24"/>
                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"/>
                      </g>
                    </svg>
                  </span>
                </span>
              </div>
            </form>
          </div>
          <div class="kt-subheader__group kt-hidden" id="kt_subheader_group_actions">
            <div class="kt-subheader__desc">
              <span id="kt_subheader_group_selected_rows"></span> Selected:
            </div>
            <div class="btn-toolbar kt-margin-l-20">
              <div class="dropdown" id="kt_subheader_group_actions_status_change">
                  <button type="button" class="btn btn-label-brand btn-bold btn-sm dropdown-toggle" data-toggle="dropdown">
                      Update Status
                  </button>
                  <div class="dropdown-menu">
                      <ul class="kt-nav">
                          <li class="kt-nav__section kt-nav__section--first">
                              <span class="kt-nav__section-text">Change status to:</span>
                          </li>
                          <li class="kt-nav__item">
                              <a href="#" class="kt-nav__link" data-toggle="status-change" data-status="1">
                                  <span class="kt-nav__link-text"><span class="kt-badge kt-badge--unified-success kt-badge--inline kt-badge--bold">Approved</span></span>
                              </a>
                          </li>
                          <li class="kt-nav__item">
                              <a href="#" class="kt-nav__link" data-toggle="status-change" data-status="2">
                                  <span class="kt-nav__link-text"><span class="kt-badge kt-badge--unified-danger kt-badge--inline kt-badge--bold">Rejected</span></span>
                              </a>
                          </li>
                          <li class="kt-nav__item">
                              <a href="#" class="kt-nav__link" data-toggle="status-change" data-status="3">
                                  <span class="kt-nav__link-text"><span class="kt-badge kt-badge--unified-warning kt-badge--inline kt-badge--bold">Pending</span></span>
                              </a>
                          </li>
                          <li class="kt-nav__item">
                              <a href="#" class="kt-nav__link" data-toggle="status-change" data-status="4">
                                  <span class="kt-nav__link-text"><span class="kt-badge kt-badge--unified-info kt-badge--inline kt-badge--bold">On Hold</span></span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <button class="btn btn-label-success btn-bold btn-sm btn-icon-h" id="kt_subheader_group_actions_fetch" data-toggle="modal" data-target="#kt_datatable_records_fetch_modal">
                  Fetch Selected
              </button>                
              <button class="btn btn-label-danger btn-bold btn-sm btn-icon-h" id="kt_subheader_group_actions_delete_all">
                  Delete All
              </button>
            </div>
          </div>
        </div>        
        <div class="kt-subheader__toolbar">
          <button  class="btn btn-label-brand btn-bold" data-toggle="modal" data-target="#kt_modal_1">
            Create New Acc
          </button>
          <button class="btn btn-label-brand btn-bold" data-toggle="modal" data-target="#kt_modal_2">
            New Transaction
          </button>
          <div class="kt-subheader__wrapper">
            <div class="dropdown dropdown-inline" data-toggle="kt-tooltip-" title="Quick actions" data-placement="left">
              <a href="#" class="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <polygon points="0 0 24 0 24 24 0 24"/>
                      <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                      <path d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z" fill="#000000"/>
                  </g>
                </svg>
              </a>
              <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
                  <!--begin::Nav-->
                  <ul class="kt-nav">
                      <li class="kt-nav__head">
                          Add New:                                    
                          <i class="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more..."></i>
                      </li>
                      <li class="kt-nav__separator"></li>
                      <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                              <i class="kt-nav__link-icon flaticon2-drop"></i>
                              <span class="kt-nav__link-text">Orders</span>
                          </a>
                      </li>                        
                      <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                              <i class="kt-nav__link-icon flaticon2-new-email"></i>
                              <span class="kt-nav__link-text">Members</span>
                              <span class="kt-nav__link-badge">
                                  <span class="kt-badge kt-badge--brand kt-badge--rounded">15</span>
                              </span>
                          </a>
                      </li>
                      <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                              <i class="kt-nav__link-icon flaticon2-calendar-8"></i>
                              <span class="kt-nav__link-text">Reports</span>
                          </a>
                      </li>
                      <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                              <i class="kt-nav__link-icon flaticon2-link"></i>
                              <span class="kt-nav__link-text">Finance</span>
                          </a>
                      </li>
                      <li class="kt-nav__separator"></li>
                      <li class="kt-nav__foot">
                          <a class="btn btn-label-brand btn-bold btn-sm" href="#">More options</a>                                    
                          <a class="btn btn-clean btn-bold btn-sm kt-hidden" href="#" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                      </li>
                  </ul>
                  <!--end::Nav-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: Content Head -->					
    <!-- begin:: Content -->
    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
      <!--Begin::Section-->
      <div class="row">
          <div class="col-xl-6">
              <!--begin:: Portlet-->
              <div class="kt-portlet kt-portlet--height-fluid">
                  <div class="kt-portlet__body kt-portlet__body--fit">
                      <!--begin::Widget -->
                      <div class="kt-widget kt-widget--project-1">
                          <div class="kt-widget__head">
                              <div class="kt-widget__label">
                                  <div class="kt-widget__media">
                                      <span class="kt-media kt-media--lg kt-media--circle"> 
                                          <img src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/project-logos/3.png" alt="image">
                                      </span>
                                  </div>
                                  <div class="kt-widget__info kt-margin-t-5">
                                      <a href="#" class="kt-widget__title">
                                          Report Cash and Bank                                                 
                                      </a>
                                      <span class="kt-widget__desc">
                                          Please Write Your Description Here  
                                      </span>
                                  </div>
                              </div>
                              <div class="kt-portlet__head-toolbar">
                                  <a href="#" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown">
                                      <i class="flaticon-more-1"></i>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                      <ul class="kt-nav">
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-line-chart"></i>
                                                  <span class="kt-nav__link-text">Reports</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-send"></i>
                                                  <span class="kt-nav__link-text">Messages</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                  <span class="kt-nav__link-text">Charts</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                                  <span class="kt-nav__link-text">Members</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-settings"></i>
                                                  <span class="kt-nav__link-text">Settings</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>

                          <div class="kt-widget__body">
                            <div class="kt-widget__stats">
                              <div class="kt-widget__item">
                                <span class="kt-widget__date">
                                  Receivebles Next 30 Days
                                </span>
                                <div class="kt-widget__label">
                                  <span class="btn btn-label-brand btn-sm btn-bold btn-upper">Rp. </span>
                                </div>
                              </div>

                              <div class="kt-widget__item">
                                <span class="kt-widget__date">
                                  Payables Next 30 Days
                                </span>
                                <div class="kt-widget__label">
                                  <span class="btn btn-label-danger btn-sm btn-bold btn-upper">Rp. </span>
                                </div>
                              </div>

                              <div class="kt-widget__item">
                                <span class="kt-widget__date">
                                  Payables Next 30 Days
                                </span>
                                <div class="kt-widget__label">
                                  <span class="btn btn-label-danger btn-sm btn-bold btn-upper">Rp. </span>
                                </div>
                              </div>

                              <div class="kt-widget__item">
                                <span class="kt-widget__date">
                                  Bank Balance
                                </span>
                                <div class="kt-widget__label">
                                  <span class="btn btn-label-danger btn-sm btn-bold btn-upper">Rp. </span>
                                </div>
                              </div>
                            </div>

                            <span class="kt-widget__text">
                              Write anything, about your description or notes for users                             
                            </span>

                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Account Code</th>
                                  <th scope="col">Acc Name</th>
                                  <th scope="col">Balance</th>
                                  <th scope="col">Last Update</th>
                                </tr>
                              </thead>
                              <tbody>
                                <template v-if="!listReportCashBank.dataUser.length">
                                  <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                  </tr>
                                </template>

                                <template v-else>
                                  <tr v-for="dataReport in listReportCashBank.dataUser" :key="dataReport.code">
                                    <th scope="row">1</th>
                                    <td>{{dataReport.code}}</td>
                                    <td>{{dataReport.name}}</td>
                                    <td>{{dataReport.balence}}</td>
                                    <td>{{dataReport.update}}</td>
                                  </tr>
                                </template>
                              </tbody>
                            </table>
                          </div>

                          <div class="kt-widget__footer">
                            <div class="kt-widget__wrapper">
                              <div class="kt-widget__section">
                                <div class="kt-widget__blog">
                                  <i class="flaticon2-list-1"></i>
                                  <a href="#" class="kt-widget__value kt-font-brand">72 Tasks</a>
                                </div>

                                <div class="kt-widget__blog">
                                  <i class="flaticon2-talk"></i>
                                  <a href="#" class="kt-widget__value kt-font-brand">648 Comments</a>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <!--end::Widget -->
                  </div>
              </div>
              <!--end:: Portlet-->
          </div>
      </div>
      <!--End::Section-->
    </div>
    <!-- end:: Content -->

    <!--begin::Modal-->
    <div class="modal fade" id="kt_modal_1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register New Account</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Name :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Acc Code :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Category :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Start Balence :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="form-control-label">Description :</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    <!--end::Modal-->

    <!--begin::Modal-->
    <div class="modal fade" id="kt_modal_2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Transfer Founds</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Transfer From :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Deposito To :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Amount :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Biaya :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Transaction No :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Transaction Date :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="form-control-label">Memo :</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="form-control-label">Attachmants :</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>
    <!--end::Modal-->
  </div>				
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cashBank',
  mounted() {
    return this.$store.dispatch('getListReportCashBank');
  },
  computed: {
    listReportCashBank(){
      return this.$store.getters.listReportCashBank;
    }
  }
};
</script>
