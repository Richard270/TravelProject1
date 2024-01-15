<template>
  <b-container fluid>
    <!-- Comienza el navbar -->
    <b-row>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#">User</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
          </b-collapse>
        </b-navbar>
      </div>
    </b-row>
    <!-- Comienza el SideBar -->
    <b-row>
      <b-col>
        <div>
          <b-sidebar id="sidebar-1" shadow visible z-index="0" no-close-on-backdrop no-close-on-esc
            no-close-on-route-change>
            <div class="px-3 py-">
              <nav class="mb-3">
                <b-nav vertical>
                    <b-nav-item>
                      <b-link :to="{ name: 'inicio' }">Opción 1</b-link>
                    </b-nav-item>
                    <b-nav-item>
                      <b-link :to="{ name: 'main' }">Opción 2</b-link>
                    </b-nav-item>
                    <b-nav-item>
                      <b-link :to="{ name: 'tercero' }">Opción 3</b-link>
                    </b-nav-item>
                </b-nav>
              </nav>
            </div>
          </b-sidebar>
        </div>
      </b-col>
      <!-- Component Router Vue -->
      <b-col cols="8">
        <div>
          <router-view> </router-view>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

