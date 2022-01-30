/*
 * Copyright 2022 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { LlamaVerticalScrollLayout } from './llama-vertical-scroll-layout';

@customElement('llama-thumbnail-grid-layout')
/**
 * Renders all items at once (downscaled) in a dynamically-sized grid.
 */
export class LlamaThumbnailGridLayout extends LlamaVerticalScrollLayout {
  // TODO: if we want to get really serious about optimizing this layout, we may eventually want
  // to consider actually storing thumbnails in the db, rather than having the page scale N images
  // on-the-fly.

  static styles = css`
      :host {
        display: grid;

        /** TODO: 200px being hardcoded is not great - we probably want different sizes depending on
         * screen size
         */
        grid-template-columns: repeat(auto-fill, 200px);
        column-gap: 1rem;
      }`;
}
