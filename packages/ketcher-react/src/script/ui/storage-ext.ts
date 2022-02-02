/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { StorageProvider } from 'ketcher-core/src/domain/services/storage'
/* local storage */
export const storage: StorageProvider = {
  get(key) {
    let item: any
    let parsedItem: any
    try {
      item = localStorage.getItem(key)
      parsedItem = item && JSON.parse(item)
    } catch (ex: any) {
      console.info('LocalStorage:', ex.name)
    }
    return parsedItem
    // return Promise.resolve(parsedItem)
  },
  set(data, key) {
    let isSet: boolean
    try {
      localStorage.setItem(key, JSON.stringify(data))
      isSet = true
    } catch (ex: any) {
      console.info('LocalStorage:', ex.name)
      isSet = false
    }
    return isSet
    // return Promise.resolve(isSet)
  }
}
