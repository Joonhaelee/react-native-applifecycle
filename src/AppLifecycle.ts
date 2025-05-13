// MIT License

// Copyright (c) 2024 Douglas Nassif Roma Junior

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import {
  AppState,
  // AppStateStatus,
  Platform,
  AppStateEvent,
  NativeEventSubscription,
} from 'react-native';

import type {
  AppStateStatusEx,
  EventHandlerType,
} from './AndroidLifecycleModule';

const AppLifecycle = {
  /**
   * Adds an event listener to the app lifecycle events.
   */
  addEventListener(
    event: AppStateEvent,
    handler: EventHandlerType,
  ): NativeEventSubscription {
    return Platform.OS === 'android'
      ? require('./AndroidLifecycleModule').default.addEventListener(
          event,
          handler,
        )
      : AppState.addEventListener(event, handler);
  },
  /**
   * Returns the current app state.
   */
  get currentState(): AppStateStatusEx {
    return Platform.OS === 'android'
      ? require('./AndroidLifecycleModule').default.currentState
      : AppState.currentState;
  },
  /**
   * Returns whether the app lifecycle module is available on the current platform.
   */
  get isAvailable(): boolean {
    return Platform.OS === 'android'
      ? require('./AndroidLifecycleModule').default.isAvailable
      : AppState.isAvailable;
  },
};

export default AppLifecycle;
