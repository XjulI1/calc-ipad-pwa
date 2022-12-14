import { describe, it, expect } from "vitest"

import { getActionFromKey, executeAction, KEY_ACTIONS } from './actions'

describe('actions helper', () => {
    describe("getActionFromKey()", () => {
        it("should by default return null", () => {
            expect(getActionFromKey()).toEqual(null)
        })

        it('should return object action 0 for key "0" ', () => {
            expect(getActionFromKey("0")).toEqual({ action: "number", value: 0 })
        })
    })
})