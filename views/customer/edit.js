<div class="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 bottom">
    <h1 class="h2">Editing: <%= Customer.firstName %></h1>

    <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
            <button href="/add" class="btn btn-sm btn-outline-secondary">New User</button>
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
            <b>Last Updated: <%= new Date(Customer.updatedAt).toUTCString() %></b>
            <b>UserId:</b> <%= Customer._id %>
        </div>
    </div>
</div>

<form action="/edit/<%= Customer._id %>?_method=PUT" method="post">
    <div class="row form-group mb-4">
        <div class="col">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" value="<%= Customer.firstName %>" placeholder="First Name"
                required>
        </div>

        <div class="col">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" value="<%= Customer.lastName %>"  placeholder="Last Name" required>
        </div>
    </div>

    <div class="row form-group mb-4">
        <div class="col">
            <label for="tel">Telephone</label>
            <input type="text" class="form-control" id="tel" name="tel" value="<%= Customer.tel %>" placeholder="Telephone" required>
        </div>

        <div class="col">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="<%= Customer.email %>" placeholder="Email" required>
        </div>
    </div>
    <div class="form-group mb-4">
        <label for="details">Customer Details</label>
        <textarea class="form-control" name="details" id="details" cols="30" rows="12" placeholder="Customer Details"><%= Customer.details %></textarea>
    </div>
    <div class="form-group mb-4">
        <button type="submit" class="btn btn-primary">Update Customer</button>

        <button type="button" class="btn btn-danger" data-bs-toggle="modal" id="deleteButton" data-bs-target="#deleteModal">Delete Customer</button>
    </div>
</form>

<div class="modal fade" tabindex="-1" role="dialog" id="deleteModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">You are about to remove a customer record.</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            This will remove the customer record of <b class="fw-bold"><%= Customer.firstName %> <%= Customer.lastName %></b><br/>
            Are you sure?
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <form action="/edit/<%= Customer._id %>?_method=DELETE" method="POST" class="position-relative">
            <button type="submit" class="btn btn-primary">Yes, Remove Customer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
