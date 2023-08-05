<ftl-pagination>
<div class="row">
    <div class="col-sm-2 col-md-2 col-lg-2">
        <div class="dataTables_info" role="status" aria-live="polite">Total { opts.pagination.pages }</div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
        <div class="dataTables_paginate paging_simple_numbers" id="bancotable_paginate">
            <ul class="pagination">
                <li class="paginate_button previous" disabled="{ opts.pagination.page <= 1 }" onclick="{ back }">Anterior</li>
                <li class="paginate_button" disabled="{ opts.pagination.page <= 1 }" onclick="{ first }">1</li>
                <li if="{ opts.pagination.page > 2 }"><span class="pagination__ellipsis" if="{ opts.pagination.page > 2 }">&hellip;</span></li>
                <li class="pagination__page" onclick="{ back }" if="{ opts.pagination.page > 1 }">{ opts.pagination.page - 1 }</li>
                <li class="pagination__page active">{ opts.pagination.page }</li>
                <li class="pagination__page" onclick="{ forward }" if="{ opts.pagination.page < opts.pagination.pages }">{ opts.pagination.page + 1 }</li>
                <li if="{ opts.pagination.page > 2 }"><span class="pagination__ellipsis" if="{ opts.pagination.page < opts.pagination.pages - 1 }">&hellip;</span></li>
                <li class="paginate_button" disabled="{ opts.pagination.page >= opts.pagination.pages }" onclick="{ last }">{ opts.pagination.pages }</li>
                <li class="paginate_button next" disabled="{ opts.pagination.page >= opts.pagination.pages }" onclick="{ forward }">Próxima</li>
            </ul>
        </div>
    </div>
    <div class="col-sm-1 col-md-1 col-lg-1">
        <div class="dataTables_length"><label>Mostrar <select name="pagination_length" aria-controls="paginationtable" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="200">200</option><option value="-1">Todos</option></select> registro(s)</label></div>
    </div>
</div>
</ftl-pagination>