<template>
  <el-row>
    <el-col :span="6">
      <div class="title mt-10 mb-5">
        Шаг 2
      </div>
    </el-col>
    <el-col class="content" :span="24">
      <el-col class="form-block mb-6">
        <el-card shadow="always">
          <div class="form-title d-f align-center">
            <i class="el-icon-warning mr-2 large-icon"></i>
            <span>
              Проверьте ваше мероприятие на наличие ошибок, если все в порядке -
              отправляйте на модерацию.
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col class="form-block">
        <el-row type="flex">
          <div class="mr-2 box">
            <div class="text-field-label box-text">
              16+
            </div>
          </div>
          <el-col class="mr-3" :span="8">
            <div class=" d-f flex-column">
              <div>
                <div class="sub-title">
                  Чайный заголовок — писать не длиннее трёх строк
                </div>
              </div>
              <div class="mt-3">
                <div class="description mb-1">
                  <i class="el-icon-location-outline mr-1"></i>
                  <span>г. Казань, ул. Волкова, д. 7/29</span>
                </div>
                <div class="description mb-1">
                  <i class="el-icon-date mr-1"></i>
                  <span>21 окт. 2019 (пт), 21 окт. 2019 (пт)</span>
                </div>
                <div class="description">
                  <i class="el-icon-time mr-1"></i>
                  <span>17:30, 16:30</span>
                </div>
              </div>
              <div class="mt-3">
                <div class="description-title">Контакты</div>
                <div class="mt-1">
                  <div class="small-description mb-1">
                    <i class="description el-icon-phone mr-1"></i>
                    <span>+7 (999) 888-77-66</span>
                  </div>
                  <div class="small-description">
                    <i class="description el-icon-message mr-1"></i>
                    <span>example@mail.com</span>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <div class="description-title">Coca-Cola</div>
                <div class="mt-1">
                  <div class="small-description">
                    <span> Организатор мероприятия</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="13">
            <div class=" d-f flex-column">
              <img
                style="background-size: cover"
                :src="require('@/assets/image.png')"
              />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="form-block">
        <el-row :gutter="20">
          <el-col class="description-long">
            В лаборатории жгучих перцев соберём собственные аппараты для
            экстракции. Узнаем, чем на самом деле пахнет мята, почему красный
            перец такой жгучий и получим привычные для кухни запахи лабораторным
            способом. В лаборатории вареных яиц c помощью физико-химических
            методов вычислим идеальное время для варки куриного яйца. Отделим
            желток от белка, проведем качественное сравнение составов и узнаем
            все о стоимости выеденного яйца. В лаборатории консервированных
            ананасов познакомимся с тушенкой и разберемся в методах сохранения
            продуктов. Законсервируем парочку ананасов четырьмя разными
            способами и заберем все это домой, чтобы выяснить, какой метод
            консервации лучше.
          </el-col>
        </el-row>
      </el-col>
      <el-col class="form-block">
        <el-row :gutter="40">
          <el-col class="mt-1" :sm="12" :md="10" :lg="7">
            <el-button class="full-field-w text-field-label form-btn" plain
              >Назад</el-button
            >
          </el-col>

          <el-col class="mt-1" :sm="12" :md="10" :lg="7">
            <el-button class="full-field-w text-field-label form-btn-filled"
              >Отправить на модерацию</el-button
            >
          </el-col>
        </el-row>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SecondStep"
};
</script>
