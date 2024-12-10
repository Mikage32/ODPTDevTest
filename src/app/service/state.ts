import { computed, Signal, signal, WritableSignal } from "@angular/core";

export class State<T> {

  private readonly _value: WritableSignal<T>
  public  readonly  value: Signal<T>

  constructor(defaultValue: T) {
    this._value = signal<T>(defaultValue)
    this.value  = computed(() => structuredClone(this._value()))
  }

  public patchState(value: Partial<T>) {
    this._value.update(v => {
      return {
        ...v,
        value
      }
    })
  }
}
