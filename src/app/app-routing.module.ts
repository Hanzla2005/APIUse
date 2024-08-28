import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'confirm-password',
    loadChildren: () => import('./pages/confirm-password/confirm-password.module').then( m => m.ConfirmPasswordPageModule)
  },
  {
    path: 'commuity',
    loadChildren: () => import('./community/commuity/commuity.module').then( m => m.CommuityPageModule)
  },
  {
    path: 'join',
    loadChildren: () => import('./community/join/join.module').then( m => m.JoinPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./community/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./community/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'my-community',
    loadChildren: () => import('./community/my-community/my-community.module').then( m => m.MyCommunityPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./community/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'community-details',
    loadChildren: () => import('./community/community-details/community-details.module').then( m => m.CommunityDetailsPageModule)
  },
  {
    path: 'new-community',
    loadChildren: () => import('./community/new-community/new-community.module').then( m => m.NewCommunityPageModule)
  },
  {
    path: 'guidelines',
    loadChildren: () => import('./community/guidelines/guidelines.module').then( m => m.GuidelinesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./community/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./community/members/members.module').then( m => m.MembersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
