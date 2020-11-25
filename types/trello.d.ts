declare module "trello" {
  export interface PopupItem {
    text: string,
    callback?: (t: TrelloContext, opts: any) => void | Promise<void>,
    url?: string,
    alwaysVisible?: boolean,
  }

  export interface TrelloContext {
    alert(opts: {
      message: string,
      duration?: number,
      display?: "info" | "warning" | "error" | "success"
    }): void
      
    popup(opts: {
      title: string,
      items?: PopupItem[] | ((t: TrelloContext, opts: {search: string}) => PopupItem[] | Promise<PopupItem[]>),
      url?: string,
      args?: {[key: string]: string},
      height?: number,
      search?: {
        count?: number,
        placeholder?: string,
        empty?: string,
        searching?: string,
        debounce?: number,
      }
    }): void

    closePopup(): void
  }

  export type CapabilityInitializer<T> = (t: TrelloContext, opts: any) => T | Promise<T>

  export interface CardButton {
      icon: string,
      text: string,
      callback: (t: TrelloContext, opts: any) => void | Promise<void>
  }

  function initialize(features: {
    "card-buttons": CapabilityInitializer<CardButton[]>
  }): void;
}
