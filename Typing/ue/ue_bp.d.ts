/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: F9DE314B49E2256215E35B9A0DB045E3
    namespace Game.BlockBreaker.Blueprints.BP_ResetButton {
        class BP_ResetButton_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ResetText: UE.TextRenderComponent;
            ButtonMesh: UE.StaticMeshComponent;
            ExecuteUbergraph_BP_ResetButton(EntryPoint: number) : void;
            /*
             *Event when this actor takes ANY damage
             */
            ReceiveAnyDamage(Damage: number, DamageType: $Nullable<UE.DamageType>, InstigatedBy: $Nullable<UE.Controller>, DamageCauser: $Nullable<UE.Actor>) : void;
            ResetTargets() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_ResetButton_C;
            static Load(InName: string): BP_ResetButton_C;
        
            __tid_BP_ResetButton_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 40FDE30D443DE3AB9D3A67A018F4F4CE
    namespace Game.BlockBreaker.UI.WBP_Reticle {
        class WBP_Reticle_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Image_39: UE.Image;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WBP_Reticle_C;
            static Load(InName: string): WBP_Reticle_C;
        
            __tid_WBP_Reticle_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3110D7DB42FC05700B927D8E528B6213
    namespace Game.Blueprints.TypeScript.TS_BaseGun {
        class TS_BaseGun_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            GunMesh: UE.StaticMeshComponent;
            MaxBulletDistance: number;
            Damage: number;
            FireRate: number;
            PS_BulletImpact: UE.ParticleSystem;
            ExecuteUbergraph_TS_BaseGun(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_BaseGun_C;
            static Load(InName: string): TS_BaseGun_C;
        
            __tid_TS_BaseGun_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 349D58A940B29F317AA01184AF765826
    namespace Game.Blueprints.TypeScript.TS_Player {
        class TS_Player_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            GunLocation: UE.SceneComponent;
            FpsCamera: UE.CameraComponent;
            EquippedGun: UE.Game.Blueprints.TypeScript.TS_BaseGun.TS_BaseGun_C;
            CanShoot: boolean;
            ExecuteUbergraph_TS_Player(EntryPoint: number) : void;
            InpAxisEvt_LookHorizontal_K2Node_InputAxisEvent_2(AxisValue: number) : void;
            InpAxisEvt_LookVertical_K2Node_InputAxisEvent_3(AxisValue: number) : void;
            InpAxisEvt_MoveForward_K2Node_InputAxisEvent_0(AxisValue: number) : void;
            InpAxisEvt_MoveRight_K2Node_InputAxisEvent_1(AxisValue: number) : void;
            InpAxisEvt_Shoot_K2Node_InputAxisEvent_4(AxisValue: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_Player_C;
            static Load(InName: string): TS_Player_C;
        
            __tid_TS_Player_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 187EB625498072D83DC3C2B2C56EB6F7
    namespace Game.Blueprints.TypeScript.TS_Rifle {
        class TS_Rifle_C extends UE.Game.Blueprints.TypeScript.TS_BaseGun.TS_BaseGun_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_TS_Rifle(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_Rifle_C;
            static Load(InName: string): TS_Rifle_C;
        
            __tid_TS_Rifle_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8FDE39584A5A23387F00F69B7DEAF04F
    namespace Game.BlockBreaker.Blueprints.BP_Target {
        class BP_Target_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            CubeMesh: UE.StaticMeshComponent;
            Material: UE.MaterialInstanceDynamic;
            DefaultColor: UE.LinearColor;
            DamagedColor: UE.LinearColor;
            Health: number;
            MaxHealth: number;
            ExecuteUbergraph_BP_Target(EntryPoint: number) : void;
            /*
             *Event when this actor takes ANY damage
             */
            ReceiveAnyDamage(Damage: number, DamageType: $Nullable<UE.DamageType>, InstigatedBy: $Nullable<UE.Controller>, DamageCauser: $Nullable<UE.Actor>) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            Reset() : void;
            TakeDamage(Damage: number) : void;
            UpdateColor() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Target_C;
            static Load(InName: string): BP_Target_C;
        
            __tid_BP_Target_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 062A9A4B46FCCFA1EA02B4A1FC32DB58
    namespace Game.BlockBreaker.Blueprints.GM_Tutorial {
        class GM_Tutorial_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_GM_Tutorial(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GM_Tutorial_C;
            static Load(InName: string): GM_Tutorial_C;
        
            __tid_GM_Tutorial_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
