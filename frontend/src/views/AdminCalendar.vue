<template>
  <div class="admin-calendar-home">
    <div class="table-responsive">
      <table id="tablePreview" class="table">
        <!--Table head-->
        <thead>
          <tr>
            <th>Time</th>
            <th>Slalom 1</th>
            <th>Slalom 2</th>
            <th>Perficient 1</th>
            <th>Perficient 2</th>
            <th>GE Aviation</th>
            <th>Human Element</th>
            <th>Merkle</th>
            <th>Samex</th>
          </tr>
        </thead>
        <!--Table body-->
        <tbody>
          <tr>
            <th scope="row">11:45-12:10</th>
            <td>Zach</td>
            <td>Tom B.</td>
            <td>Kirsten</td>
            <td>Guan</td>
            <td>Shawn</td>
            <td>Ryan</td>
            <td>Audrey</td>
            <td>Jackie</td>
          </tr>
          <tr>
            <th scope="row">12:15-12:40</th>
            <td>Nate</td>
            <td>Tom P.</td>
            <td>Audrey</td>
            <td>Kirsten</td>
            <td>Tom B.</td>
            <td>Ryan</td>
            <td>Guan</td>
            <td>Damar</td>
          </tr>
          <tr>
            <th scope="row">12:45-1:10</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
          </tr>
           <tr>
            <th scope="row">1:15-1:40</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
          </tr>
            <tr class="table-success" >
            <th scope="row">1:40-2:00</th>
            <td>LUNCH</td>
            <td>LUNCH</td>
            <td>LUNCH</td>
            <td>LUNCH</td>
            <td>LUNCH</td>
            <td>LUNCH</td>
            <td>LUNCH</td>
            <td>LUNCH</td>
          </tr>
           <tr>
            <th scope="row">2:00-2:25</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
          </tr>
           <tr>
            <th scope="row">2:30-2:55</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
          </tr>
           <tr>
            <th scope="row">3:00-3:25</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
          </tr>
          <tr>
            <th scope="row">3:30-3:55</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
          </tr>
          <tr>
            <th scope="row">4:00-4:25</th>
            <td>Amyre</td>
            <td>Matt</td>
            <td>Chris D.</td>
            <td>Chris N.</td>
            <td>Alicia</td>
            <td>Carl</td>
            <td>Audrey</td>
            <td>Nate</td>
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
.admin-calendar-home {
  background: rgba(248, 249, 250, 0.94);
  padding: 5rem;
  margin: 10rem;
}

.table thead,
th {
  text-transform: uppercase;
  vertical-align: top;
}
</style>