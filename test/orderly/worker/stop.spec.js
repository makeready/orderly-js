import { assert, expect, sinon, spy, stub } from '../../test_helper'

let stubStop = stub('orderly/worker/stop', {
  clearNext: './clear_next',
  discontinue: './discontinue'
})

describe('stop', function() {
  let worker = {}

  it('clears next scheduled worker job', function() {
    let spy = sinon.stub().returns(worker)
    let stop = stubStop({ clearNext: spy })
    stop(worker)
    expect(spy.withArgs(worker)).calledOnce
  })

  it('discontinues', function() {
    let spy = sinon.spy()
    let stop = stubStop({ discontinue: spy })
    stop(worker)
    expect(spy.withArgs(worker)).calledOnce
  })

  it('returns the worker', function() {
    let stop = stubStop()
    expect(stop(worker)).to.eq(worker)
  })
})
