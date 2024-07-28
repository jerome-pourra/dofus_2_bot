import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanInformations } from "./HumanInformations";
import { GameRolePlayNamedActorInformations } from "./GameRolePlayNamedActorInformations";

export class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations
{

	public static readonly protocolId: number = 9318;

	public humanoidInfo: HumanInformations;
	public accountId: number = 0;

    public constructor()
    {
        super();
        this.humanoidInfo = new HumanInformations();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayHumanoidInformations(input);
    }

    private deserializeAs_GameRolePlayHumanoidInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.humanoidInfo = ProtocolTypeManager.getInstance(HumanInformations,_id1);
        this.humanoidInfo.deserialize(input);
        this._accountIdFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of GameRolePlayHumanoidInformations.accountId.");
        }
    }

}