<template>
  <div class="home">
    <div class="container">
      <div class="clearfix row">
        <div class="col-md-12 column">
          <Nav :num="1" />
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                Panel title
              </h3>
            </div>
            <div class="panel-body">
              Panel content
            </div>
            <div class="panel-footer">
              Panel footer
            </div>
          </div>
          <div class="carousel slide" id="carousel-260043">
            <ol class="carousel-indicators">
              <li class="active" data-slide-to="0" data-target="#carousel-260043">
              </li>
              <li data-slide-to="1" data-target="#carousel-260043">
              </li>
              <li data-slide-to="2" data-target="#carousel-260043">
              </li>
            </ol>
            <div class="carousel-inner">
              <div class="item active">
                <img alt="" :src="require('@/assets/img/风景1.jpg')" />
                <div class="carousel-caption">
                  <h4>
                    First Thumbnail label
                  </h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
              <div class="item">
                <img alt="" :src="require('@/assets/img/风景1.jpg')" />
                <div class="carousel-caption">
                  <h4>
                    Second Thumbnail label
                  </h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
              <div class="item">
                <img alt="" :src="require('@/assets/img/风景1.jpg')" />
                <div class="carousel-caption">
                  <h4>
                    Third Thumbnail label
                  </h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div> <a class="left carousel-control" href="#carousel-260043" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-260043" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="thumbnail">
                <img alt="300x200" :src="require('@/assets/img/风景1.jpg')" />
                <div class="caption">
                  <h3>
                    Thumbnail label
                  </h3>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi port gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <img alt="300x200" :src="require('@/assets/img/风景1.jpg')" />
                <div class="caption">
                  <h3>
                    Thumbnail label
                  </h3>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <img alt="300x200" :src="require('@/assets/img/风景1.jpg')" />
                <div class="caption">
                  <h3>
                    Thumbnail label
                  </h3>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix row">
        <div class="col-md-4 column">
          <h2>
            Heading
          </h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
        <div class="col-md-4 column">
          <h2>
            Heading
          </h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
        <div class="col-md-4 column">
          <h2>
            Heading
          </h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/nav.vue'

export default {
  name: 'Home',
  components: {Nav}
}
</script>
<style>
@media (min-width: 768px) {
  .lin-ul {
    padding-right: 50px;
  }
}
</style>