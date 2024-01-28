import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { TestPipe } from './_test/test.pipe';
import { TestComponent } from './_test/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroVideoRawGeniusComponent } from './components/hero-video-rawgenius/hero-video-rawgenius.component';

import { NavComponent } from './components/nav/nav.component';
import { Btn2topComponent } from './elements/btn2top/btn2top.component';
import { IconsComponent } from './elements/icons/icons.component';
import { ProfileDropdownComponent } from './elements/profile-dropdown/profile-dropdown.component';
// import { TranslationDropdownComponent } from './elements/translation-dropdown/translation-dropdown.component';
import { HeroVisualComponent } from './components/hero-visual/hero-visual.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { SpeakersPageComponent } from './pages/speakers-page/speakers-page.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { DebugDirective } from './shared/directives/debug.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IconsComponent,
    HomePageComponent,
    AboutPageComponent,
    DashboardPageComponent,
    SpeakersPageComponent,

    NotFoundPageComponent,
    StyleguideComponent,
    ColorsComponent,
    TestPipe,
    TestComponent,
    Btn2topComponent,
    HeroVideoRawGeniusComponent,
    ProfileDropdownComponent,
    // TranslationDropdownComponent,
    IconsComponent,
    DebugDirective,
    UserPageComponent,
    HeroVisualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
