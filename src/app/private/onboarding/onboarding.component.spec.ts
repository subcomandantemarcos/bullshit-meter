import { PrivateOnboardingPageComponent } from './onboarding.component';
import { PrivateOnboardingPageEffects, privateOnboardingPageReducer } from './shared/store';
import { AppState } from '@shared/store/state';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { render, RenderResult } from '@testing-library/angular';
import { configuration } from '@configurations';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { PrivateOnboardingPageFacade } from './onboarding.facade';

describe('PrivateOnboardingPageComponent', () => {
  let component: RenderResult<PrivateOnboardingPageComponent>;
  let componentInstance: PrivateOnboardingPageComponent;
  let store: Store<AppState>;

  const translation = require(`../../../assets/i18n/${configuration.language.default}.json`);

  beforeEach(async () => {
    component = await render(PrivateOnboardingPageComponent, {
      imports: [
        TranslateTestingModule.withTranslations(configuration.language.default, translation),
        StoreModule.forRoot({}, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        StoreModule.forFeature('privateOnboardingPage', privateOnboardingPageReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([PrivateOnboardingPageEffects])
      ],
      declarations: [
        PrivateOnboardingPageComponent
      ],
      routes: [],
      providers: [PrivateOnboardingPageFacade]
    });

    componentInstance = component.fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', async () => {
    expect(component).toBeDefined();
  });
});

