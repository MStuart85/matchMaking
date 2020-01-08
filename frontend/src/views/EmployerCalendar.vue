<template>
  <div class="employer-calendar-home">
    <div class="table-responsive">
      <table id="tablePreview" class="table w-auto">
        <!--Table head-->
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Slalom 1</th>
            <th scope="col">Slalom 2</th>
          </tr>
        </thead>
        <!--Table head-->
        <!--Table body-->
        <tbody>
          <tr>
            <th scope="row">11:45-12:10</th>
            <td>Zach</td>
            <td>Tom B.</td>
          </tr>
          <tr>
            <th scope="row">12:15-12:40</th>
            <td>Nate</td>
            <td>Tom P.</td>
          </tr>
          <tr>
            <th scope="row">12:45-1:10</th>
            <td>Amyre</td>
            <td>Matt</td>
          </tr>
          <tr>
            <th scope="row">1:15-1:40</th>
            <td>Kirsten</td>
            <td>Audrey</td>
          </tr>
          <tr class="table-success">
            <th scope="row">1:40-2:00</th>
            <td>LUNCH</td>
            <td>LUNCH</td>
          </tr>
          <tr>
            <th scope="row">2:00-2:25</th>
            <td>Jeff</td>
            <td>Nicole</td>
          </tr>
          <tr>
            <th scope="row">2:30-2:55</th>
            <td>Andy</td>
            <td>Margaret</td>
          </tr>
          <tr>
            <th scope="row">3:00-3:25</th>
            <td>Chris D.</td>
            <td>Chris N.</td>
          </tr>
          <tr>
            <th scope="row">3:30-3:55</th>
            <td>Jeff</td>
            <td>Nicole</td>
          </tr>
          <tr>
            <th scope="row">4:00-4:25</th>
            <td></td>
            <td>Matt</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.employer-calendar-home {
  background: rgba(248, 249, 250, 0.94);
  padding: 5rem;
  margin: 10rem;
}

.table {
  margin: auto;
}

.table th, td {
  padding: 1rem 2rem;
}

.table thead, th {
  text-transform: uppercase;
}

</style>