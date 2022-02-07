import { PrivateProfileSelectLanguagePageComponent } from './select-language.component';
import { PrivateProfileSelectLanguagePageEffects, privateProfileSelectLanguagePageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateProfileSelectLanguagePageFacade } from './select-language.facade';

describe('PrivateProfileSelectLanguagePageComponent', () => {
  let component: RenderResult<PrivateProfileSelectLanguagePageComponent>;
  let componentInstance: PrivateProfileSelectLanguagePageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateProfileSelectLanguagePageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateProfileSelectLanguagePage', privateProfileSelectLanguagePageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateProfileSelectLanguagePageEffects])
      ],
      declarations: [
        PrivateProfileSelectLanguagePageComponent
      ],
      routes: [],
      providers: [PrivateProfileSelectLanguagePageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

