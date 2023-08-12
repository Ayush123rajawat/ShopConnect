<div class="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 bottom">
    <h1 class="h2"><%= Customer.firstName %> <%= Customer.lastName %></h1>

    <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
        </div>
    </div>
</div>

<div class="col py-3">

    <div class="row">
        <div class="col">
            
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <li class="breadcrumb-item active"><%= Customer.firstName %></li>
                </ol>
            </nav>
        </div>
        <div class="col text-end fw-lighter">
           <b>Last Updated <%= new Date(Customer.updatedAt).toUTCString() %> </b>
           <b>UserId:</b> <%= Customer._id %>
        </div>
    </div>
</div>

<ul class="list-group">
    <li class="list-group-item">
        <div class="row">
            <div class="col" style="max-width: 140px"> <b>Name:</b></div>
            <div class="col"><%= Customer.firstName %> <%= Customer.lastName %></div>
        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col" style="max-width: 140px"> <b>Tel:</b></div>
            <div class="col"><%= Customer.tel %> </div>
        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col" style="max-width: 140px"> <b>Email:</b></div>
            <div class="col"><%= Customer.email %> </div>
        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col" style="max-width: 140px"> <b>Details:</b></div>
            <div class="col"><%= Customer.details %></div>
        </div>
    </li>

    <li class="list-group-item">
        <div class="row">
            <div class="col" style="max-width: 140px"> <b>CreatedAt:</b></div>
            <div class="col"><%= Customer.createdAt %></div>
        </div>
    </li>
</ul>
